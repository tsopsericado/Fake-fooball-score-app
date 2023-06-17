import React, { useState } from "react";
import "./MatchScoreboard.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="match-scoreboard">
      <div className="team-a" onClick={() => selectTeam("teamA")}>
        <div className="team-name">Team A</div>
        <div className="team-score">{teamAScore}</div>
        <input type="text" placeholder="team name" />
        <p>
          {choosenTeams?.teams?.teamA?.name ||
            choosenTeams?.teams?.teamA?.country}
        </p>
        <p>
          {choosenTeams?.teams?.teamA?.path || 
          choosenTeams?.teams?.teamA?.flag}
        </p>
      </div>

      <div className="team-b" onClick={() => selectTeam("teamB")}>
        <div className="team-name">Team B</div>
        <div className="team-score">{teamBScore}</div>
        <input type="text" placeholder="team name" />
        <p>
          {choosenTeams?.teams?.teamB?.name ||
            choosenTeams?.teams?.teamB?.country}
        </p>
        <p>
          {choosenTeams?.teams?.teamB?.path ||
           choosenTeams?.teams?.teamB?.flag}
        </p>
      </div>
    </div>
  );
}
