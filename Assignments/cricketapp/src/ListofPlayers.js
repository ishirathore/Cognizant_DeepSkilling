import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 95 },
    { name: "Dhoni", score: 65 },
    { name: "Pant", score: 45 },
    { name: "Hardik", score: 70 },
    { name: "Jadeja", score: 80 },
    { name: "Shami", score: 60 },
    { name: "Bumrah", score: 75 },
    { name: "Gill", score: 90 },
    { name: "Surya", score: 55 },
    { name: "Rahul", score: 68 }
  ];

  // Arrow function to filter players with score >= 70
  const topPlayers = players.filter(p => p.score >= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <h3>All Players:</h3>
      {players.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}

      <h3>Top Players (score ≥ 70):</h3>
      {topPlayers.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
}

export default ListofPlayers;
