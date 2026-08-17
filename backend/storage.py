import json
import datetime
from pathlib import Path


PROJECT_ROOT = Path(__file__).parent.parent
DATA_DIR = PROJECT_ROOT / "data"
SNAPSHOT_DIR = DATA_DIR / "snapshots"

def save_snapshot(data):
    """Write data as a dated snapshot and update latest.json."""
    SNAPSHOT_DIR.mkdir(parents=True, exist_ok=True)

    today = datetime.date.today().isoformat()

    snapshot_path = SNAPSHOT_DIR / f"{today}.json"
    with open(snapshot_path, "w") as f:
        json.dump(data, f, indent=2)

    latest_path = DATA_DIR / "latest.json"
    with open(latest_path, "w") as f:
        json.dump(data, f, indent=2)

    print(f"Saved snapshot: {snapshot_path}")

