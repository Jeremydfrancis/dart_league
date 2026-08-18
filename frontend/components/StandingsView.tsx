"use client";

import { useState } from "react";
import { Team } from "@/lib/types";

type Props = {
  divisions: Record<string, { teams: Team[] }>;
};

export default function StandingsView({ divisions }: Props) {
  const divisionNames = Object.keys(divisions).sort();
  const [selected, setSelected] = useState(divisionNames[0]);
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const teams = divisions[selected].teams;

  return (
    <div className="py-10">
      {/* Header */}
      <div className="mb-6 flex items-end justify-between">
        <div className="pb-10">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Standings
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Division {selected} · {teams.length} teams · ranked by wins
          </p>
        </div>
        <div className="flex gap-1 pb-10">
          {divisionNames.map((name) => (
            <button
              key={name}
              onClick={() => {
                setSelected(name);
                setExpandedTeam(null);
              }}
              className={
                name === selected
                  ? "h-8 w-8 rounded bg-red-600 text-sm font-semibold text-white"
                  : "h-8 w-8 rounded text-sm text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white"
              }
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-900 text-xs uppercase tracking-wider text-neutral-500">
              <th
                scope="col"
                className="py-2.5 pl-4 pr-2 text-left font-medium"
              >
                #
              </th>
              <th scope="col" className="px-2 py-2.5 text-left font-medium">
                Team
              </th>
              <th scope="col" className="px-2 py-2.5 text-right font-medium">
                GP
              </th>
              <th scope="col" className="px-2 py-2.5 text-right font-medium">
                W
              </th>
              <th scope="col" className="px-2 py-2.5 text-right font-medium">
                L
              </th>
              <th scope="col" className="px-2 py-2.5 text-right font-medium">
                Win%
              </th>
              <th scope="col" className="px-2 py-2.5 text-right font-medium">
                PPD
              </th>
              <th
                scope="col"
                className="py-2.5 pl-2 pr-4 text-right font-medium"
              >
                MPR
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => {
              const isOpen = expandedTeam === team.team;
              return (
                <>
                  <tr
                    key={team.team}
                    onClick={() => setExpandedTeam(isOpen ? null : team.team)}
                    className={`cursor-pointer border-t border-neutral-800 transition-colors hover:bg-neutral-800/60 ${
                      i % 2 === 1 ? "bg-neutral-900/40" : ""
                    } ${isOpen ? "bg-neutral-800/60" : ""}`}
                  >
                    <td className="py-3 pl-4 pr-2 tabular-nums text-neutral-600">
                      {i + 1}
                    </td>
                    <td className="px-2 py-3 font-semibold text-white">
                      {team.team}
                    </td>
                    <td className="px-2 py-3 text-right tabular-nums text-neutral-400">
                      {team.games}
                    </td>
                    <td className="px-2 py-3 text-right font-medium tabular-nums text-white">
                      {team.wins}
                    </td>
                    <td className="px-2 py-3 text-right tabular-nums text-neutral-400">
                      {team.losses}
                    </td>
                    <td className="px-2 py-3 text-right tabular-nums text-neutral-300">
                      {team.win_percentage}
                    </td>
                    <td className="px-2 py-3 text-right tabular-nums text-neutral-300">
                      {team.team_avg_ppd}
                    </td>
                    <td className="py-3 pl-2 pr-4 text-right tabular-nums text-neutral-300">
                      {team.team_avg_mpr}
                    </td>
                  </tr>

                  {isOpen && (
                    <tr key={team.team + "-players"}>
                      <td
                        colSpan={8}
                        className="border-t border-neutral-800 bg-neutral-950 p-4"
                      >
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="text-left uppercase tracking-wider text-neutral-600">
                                <th
                                  scope="col"
                                  className="pb-2 pr-4 font-medium"
                                >
                                  Player
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                >
                                  GP
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                >
                                  PPD
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                >
                                  MPR
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="01 Hat Tricks"
                                >
                                  Hat
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="Low Tons"
                                >
                                  LT
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="High Tons"
                                >
                                  HT+
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="White Horses"
                                >
                                  WH
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="Cricket Hat Tricks"
                                >
                                  CrHat
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="9 Mark Rounds"
                                >
                                  9M
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 pb-2 text-right font-medium"
                                  title="8 Mark Rounds"
                                >
                                  8M
                                </th>
                                <th
                                  scope="col"
                                  className="pb-2 pl-3 text-right font-medium"
                                  title="7 Mark Rounds"
                                >
                                  7M
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {team.players.map((p) => (
                                <tr
                                  key={p.player}
                                  className="border-t border-neutral-900"
                                >
                                  <td className="py-2 pr-4 text-neutral-200">
                                    {p.player}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.games}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-300">
                                    {p.ppd}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-300">
                                    {p.mpr}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.hat_trick_01}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.low_ton}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.high_ton}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.white_horse}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.cricket_hat_trick}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.nine_mark}
                                  </td>
                                  <td className="px-3 py-2 text-right tabular-nums text-neutral-500">
                                    {p.eight_mark}
                                  </td>
                                  <td className="py-2 pl-3 text-right tabular-nums text-neutral-500">
                                    {p.seven_mark}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
