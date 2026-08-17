import json
import datetime
from pathlib import Path


def save_snapshot(data):
    """Write data as a dated snapshot and update latest.json."""
    # 1. make sure the folders exist
    Path("data/snapshots").mkdir(parents=True, exist_ok=True)

    # 2. get today's date as a string for the filename
    today = datetime.date.today().isoformat()
    # 3. write the dated snapshot
    snapshot_path = f"data/snapshots/{today}.json"
    with open(snapshot_path, "w") as f:
        json.dump(data, f, indent=2)

    # 4. write latest.json (same data, fixed name)
    with open("data/latest.json", "w") as f:
        json.dump(data, f, indent=2)

