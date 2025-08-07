import React, { useState } from "react";

export default function App() {
  // State
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  // Handlers
  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }
    setTeam([...team, fighter]);
    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
    setMoney(money - fighter.price);
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter((f) => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  }

  // Calculate totals
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Zombie Apocalypse Team Builder</h1>
      <p>
        <strong>Money:</strong> ${money}
      </p>

      <h2>Available Fighters</h2>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap" }}>
        {zombieFighters.map((fighter) => (
          <li
            key={fighter.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "0.5rem",
              padding: "0.5rem",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img src={fighter.img} alt={fighter.name} width="100" />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap" }}>
          {team.map((fighter) => (
            <li
              key={fighter.id}
              style={{
                border: "1px solid #008000",
                borderRadius: "5px",
                margin: "0.5rem",
                padding: "0.5rem",
                width: "150px",
                textAlign: "center",
                backgroundColor: "#f0fff0",
              }}
            >
              <img src={fighter.img} alt={fighter.name} width="100" />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Team Stats</h3>
      <p>
        <strong>Total Strength:</strong> {totalStrength}
      </p>
      <p>
        <strong>Total Agility:</strong> {totalAgility}
      </p>
    </div>
  );
}