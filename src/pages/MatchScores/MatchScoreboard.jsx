import React, { useState } from "react";
import "./MatchScoreboard.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export default function MatchScoreboard() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(1);
  const [choosenTeams, setChoosenTeams] = useState({
    choice: "",
    teams: {
      teamA: {},
      teamB: {},
    },
  });

  const navigate = useNavigate();

  const selectTeam = (team) => {
    const locaTeam = JSON.parse(localStorage.getItem("teamData"));
    const teamData = locaTeam || {
      choice: "",
      teams: {
        teamA: {},
        teamB: {},
      },
    };

    teamData.choice = team;
    localStorage.setItem("teamData", JSON.stringify(teamData));
    navigate("/table");
  };

  React.useEffect(() => {
    const locaTeam = JSON.parse(localStorage.getItem("teamData"));

    if (locaTeam) setChoosenTeams(locaTeam);
  }, []);

  const captureScreen =()=>{
    const  element = document.getElementById('');
    html2canvas(element).then(canvas=>{
      const link = document.createElement('a');
      link.download ='screenshot.png';
      link.href = canvas.toDataURL();
      link.click()
    })
  }

  return (
    <div className="match-scoreboard">
      <div className="team-a" onClick={() => selectTeam("teamA")}>
        <div className="team-score">{teamAScore}</div>

        <p>
          {choosenTeams?.teams?.teamA?.name ||
            choosenTeams?.teams?.teamA?.country}
        </p>

        <img
          className="image"
          width="150"
          height="40"
          src={
            choosenTeams?.teams?.teamA?.path || choosenTeams?.teams?.teamA?.flag
          }
          alt="flag"
        />
      </div>

      <div className="team-b" onClick={() => selectTeam("teamB")}>
        <div className="team-score">{teamBScore}</div>
        <p>
          {choosenTeams?.teams?.teamB?.name ||
            choosenTeams?.teams?.teamB?.country}
        </p>

        <img
          width="150"
          height="40"
          src={
            choosenTeams?.teams?.teamB?.url || choosenTeams?.teams?.teamB?.flag
          }
          alt="path"
        />
      </div>
        <button onClick={captureScreen}>Capture Screen</button>
    </div>
  );
}
