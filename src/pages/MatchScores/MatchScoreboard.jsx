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

  const handleChange = (e) => {
    const value = e.target.value;
    setTeamAScore(value)
  };
   
  const handleChange1 = (event) => {
    const value = event.target.value;
    setTeamBScore(value)
  }
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

  // const captureScreen = () => {
  //   const element = document.getElementById("#match-scoreboard");
  //   html2canvas(element).then((canvas) => {
  //     const link = document.createElement("a");
  //     link.download = "screenshot.png";
  //     link.href = canvas.toDataURL();
  //     link.click();
  //   });
  // };

 const canvasRef = React.useRef(null);
  const SaveImageToLocal =(event)=> {
    let link = event.currentTarget;
    link.setAttribute('download', 'football.png');
    let image = canvasRef.current.toDataURL('image/png');
    link.setAttribute('href', image);
  }
  return (
    <div id="match-scoreboard" ref={canvasRef}>
      <div className="team1team2">
        <div className="team1">
          <div className="team-a" onClick={() => selectTeam("teamA")}>
            <p className="home">Home</p>
            <img
              className="oponents_images"
              width="150"
              height="40"
              src={
                choosenTeams?.teams?.teamA?.path ||
                choosenTeams?.teams?.teamA?.flag
              }
              alt="flag"
            />
            <p>
              {choosenTeams?.teams?.teamA?.name ||
                choosenTeams?.teams?.teamA?.country}
            </p>
          </div>
          <input
            type="number"
            placeholder="0"
            onChange={handleChange}
            value={teamAScore}
          />
        </div>

        <div className="team2">
          <div>
            <input
              type="number"
              placeholder="0"
              onChange={handleChange1}
              value={teamBScore}
            />
          </div>
          <div className="team-b" onClick={() => selectTeam("teamB")}>
            <p className="away">Away</p>
            <img
              className="oponents_images"
              width="150"
              height="40"
              src={
                choosenTeams?.teams?.teamB?.url ||
                choosenTeams?.teams?.teamB?.flag
              }
              alt="path"
            />

            <p>
              {choosenTeams?.teams?.teamB?.name ||
                choosenTeams?.teams?.teamB?.country}
            </p>
          </div>
        </div>
      </div>
      {/* <button onClick={captureScreen}>Capture Screen</button> */}
      <button className="button">
        <a
          id="Capture_image_link"
          href="capture_link"
          onClick={SaveImageToLocal}
        >
          Capture Image
        </a>
      </button>
    </div>
  );
}
 