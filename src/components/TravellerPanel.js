import React from "react";
import travelerSheet from "../data/traveler_sheet"
import { usePlayers } from "./PlayersProvider"

export default function TravellerPanel({ playerCount }) {
  const players = usePlayers()
  const sheet = travelerSheet[players.players.length] || {
    "townsfolk": 0,
    "outsiders": 0,
    "minions": 0,
    "demons": 0
  }

  return (
    <table className="traveller-sheet">
      <thead>
      <tr>
        <th>Type</th>
        <th>Expected</th>
        <th>Encountered</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Townsfolk</td>
        <td>{sheet["townsfolk"]}</td>
        <td>not implemented</td>
      </tr>
      <tr>
        <td>Outsiders</td>
        <td>{sheet["outsiders"]}</td>
        <td>not implemented</td>
      </tr>
      <tr>
        <td>Minions</td>
        <td>{sheet["minions"]}</td>
        <td>not implemented</td>
        </tr>
        <tr>
          <td>Demons</td>
          <td>{sheet["demons"]}</td>
          <td>not implemented</td>
        </tr>
      </tbody>
    </table>
  )
}