def get_win_pct(wins,losses):
    """Gets the wins/losses percentage for each team."""
    if wins is None or losses is None or (wins + losses) == 0:
        return None
    return round((wins / (wins + losses) * 100), 2)


def get_team_avg(roster, stat):
    """Returns the average of a given stat across a team's players."""
    values = [p[stat] for p in roster if p[stat] is not None]
    if len(values) == 0:
        return None
    return round(sum(values) / len(values), 2)


def merge_players_and_teams(players, teams):
    """Join each team's win record with its player roster, per division."""
    merged = {}
    for division in players:
        merged[division] = {"teams": []}
        for team_name, roster in players[division].items():
            record = teams[division][team_name]
            merged[division]["teams"].append({
                "team": team_name,
                "wins": record["wins"],
                "losses": record["losses"],
                "win_percentage": get_win_pct(record["wins"], record["losses"]),
                "team_avg_ppd": get_team_avg(roster,'ppd'),
                "team_avg_mpr": get_team_avg(roster,'mpr'),
                "games": record["games"],
                "forfeits": record["forfeits"],
                "players": roster,
            })
        merged[division]["teams"].sort(
                key=lambda t: (t["wins"] is not None, t["wins"] or 0),
                reverse=True,
            )
    return merged