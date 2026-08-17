from backend.config import all_reports
from backend.parsers import parse_player_report, parse_team_report
from backend.merge import merge_players_and_teams
from storage import save_snapshot

def combine_all_player_reports():
    """Combines all the division reports of players into a single dictionary."""
    combined_players = {}
    for report, config in all_reports.items():
        players = parse_player_report(config["player_url"], config["divisions"])
        combined_players.update(players)
    return combined_players


def combine_all_team_reports():
    """Combines all the division reports of teams into a single dictionary."""
    combined_teams = {}
    for report, config in all_reports.items():
        teams = parse_team_report(config["team_url"], config["divisions"])
        combined_teams.update(teams)
    return combined_teams


def main():
    players = combine_all_player_reports()
    teams = combine_all_team_reports()
    combined = merge_players_and_teams(players, teams)
    save_snapshot(combined)



if __name__ == "__main__":
    main()