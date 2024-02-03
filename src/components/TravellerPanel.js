import React from "react";
import travelerSheet from "../data/traveler_sheet"
import { useParticipants } from "./ParticipantsProvider"

export default function TravellerPanel({ playerCount }) {
  const participants = useParticipants()
  const sheet = travelerSheet[participants.townSquare.length] || {
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
        <td>N/A</td>
      </tr>
      <tr>
        <td>Outsiders</td>
        <td>{sheet["outsiders"]}</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>Minions</td>
        <td>{sheet["minions"]}</td>
        <td>N/A</td>
        </tr>
        <tr>
          <td>Demons</td>
          <td>{sheet["demons"]}</td>
          <td>N/A</td>
        </tr>
      </tbody>
    </table>
  )
}