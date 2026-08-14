"""
Configuration for the dart league scraper.
Each report has:
  - player_url:   the Player Standings shared report
  - team_url:     the Team Standings shared report (wins/losses)
  - schedule_url: the Schedule shared report (matches/dates)
  - divisions:    which divisions this report contains, IN ORDER
                  (used to label the standings tables and to validate the parse)
"""


all_reports = {
    "e_report": {
        "player_url":   "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=b1aa2dc6-3b87-40aa-852c-1f5c7991acf0",
        "team_url":     "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=4739e4d7-76b8-4697-8837-a81228cc11c0",
        "schedule_url": "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=f9bbe80d-f95b-4c2d-a4b3-e56f6322328e",
        "divisions":    ["E"],
    },
    "cd_report": {
        "player_url":   "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=864b757b-0899-427a-9a60-74ba2ec4482e",
        "team_url":     "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=ff396b93-3739-4150-a5ae-fbaa8f072626",
        "schedule_url": "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=fb3514c7-8038-474f-b7af-b6b51a082e18",
        "divisions":    ["C", "D"],
    },
    "ab_report": {
        "player_url":   "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=26f5ea6b-653c-45ea-bf9a-9e3c14a8475d",
        "team_url":     "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=497fd703-de58-48f5-9d3b-054b2c087e67",
        "schedule_url": "https://www.leagueleader.net/sharedreport.php?operatorid=1312&code=9dfcbc61-c556-4cee-a042-95736d834945",
        "divisions":    ["A", "B"],
    },
}