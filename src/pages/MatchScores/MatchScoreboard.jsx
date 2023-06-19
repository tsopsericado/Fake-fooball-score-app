import React, { useState } from "react";
import "./MatchScoreboard.css";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

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
        <div className="team-score">{teamAScore}</div>

        <p>
          {choosenTeams?.teams?.teamA?.name ||
            choosenTeams?.teams?.teamA?.country}
        </p>

        <img
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
          src={
            choosenTeams?.teams?.teamB?.path || choosenTeams?.teams?.teamB?.url
          }
          alt="path"
        />
      </div>
    </div>
  );
}
