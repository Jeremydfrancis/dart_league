import fs from "fs";
import path from "path";
import StandingsView from "@/components/StandingsView";

export default function StandingsPage() {
  const dataPath = path.join(process.cwd(), "..", "data", "latest.json");
  const raw = fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(raw);

  return <StandingsView divisions={data} />;
}
