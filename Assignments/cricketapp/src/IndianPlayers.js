import React from "react";

function IndianPlayers() {
  // Odd and Even team players
  const oddTeam = ["Virat", "Dhoni", "Hardik", "Gill", "Rahul"];
  const evenTeam = ["Rohit", "Pant", "Jadeja", "Shami", "Bumrah"];

  // Destructuring example
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // Merge arrays using ES6 spread
  const T20players = ["Virat", "Rohit", "Pant"];
  const RanjiTrophyPlayers = ["Gill", "Rahul", "Shami"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Odd Team:</h3>
      <p>{odd1}, {odd2}, {restOdd.join(", ")}</p>

      <h3>Even Team:</h3>
      <p>{even1}, {even2}, {restEven.join(", ")}</p>

      <h3>Merged Players (T20 + Ranji):</h3>
      <p>{allPlayers.join(", ")}</p>
    </div>
  );
}

export default IndianPlayers;
