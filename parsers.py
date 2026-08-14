import pandas as pd


PLAYER_COLS = ['player', 'games', 'ppd', 'mpr', 'hat_trick_01',
                         'low_ton', 'high_ton', 'white_horse',
                         'cricket_hat_trick', 'nine_mark', 'eight_mark', 'seven_mark']
FLOAT_COLS = {'ppd', 'mpr'}
TEAM_COLS = ['team', 'games', 'wins', 'losses', 'forfeits']


def to_num(value, as_float=False):
    """Converts a value to an (integer || float) or 'None' if it can't be converted."""
    try:
        return float(value) if as_float else int(float(value))
    except (ValueError,TypeError):
        return None


def group_players_by_team(df):
    """Groups players under their team in a dictionary format."""
    roster = {}
    current_team = None
    for index, row in df.iterrows():
        name = row['player']
        if pd.isna(name) or str(name).strip() == 'Team Totals:':
            continue
        elif (row.astype(str) == str(name)).all():
            roster[name] = []
            current_team = name
        else:
            player_data = {}
            for col in PLAYER_COLS:
                if col == 'player':
                    player_data[col] = str(row[col]).strip()
                elif col in FLOAT_COLS:
                    player_data[col] = to_num(row[col], as_float=True)
                else:
                    player_data[col] = to_num(row[col])
            roster[current_team].append(player_data)
    return roster


def parse_player_report(url, divisions):
    """Parse a player report into {division: {team: [players]}}."""
    tables = pd.read_html(url)
    standings = [t for t in tables if t.shape[1] == 12]

    result = {}
    for table, division in zip(standings, divisions):
        table.columns = PLAYER_COLS
        result[division] = group_players_by_team(table)
    return result


def parse_team_report(url, divisions):
    """Parse a team report into {division: {team: {wins, losses, ...}}}."""
    tables = pd.read_html(url)
    standings = [t for t in tables if t.shape[1] == 5][0]
    standings.columns = TEAM_COLS

    result = {}
    current_division = None
    for index, row in standings.iterrows():
        team = str(row['team']).strip()

        if team.startswith('Division:'):
            current_division = team.split(":")[-1].strip()
            result[current_division] = {}
        else:

            result[current_division][team] = {
                'games': to_num(row['games']),
                'wins': to_num(row['wins']),
                'losses': to_num(row['losses']),
                'forfeits': to_num(row['forfeits']),
            }
    return result