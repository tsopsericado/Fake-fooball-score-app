import React, { useState } from "react";
import "./MatchScoreboard.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import Canvas2Image from 

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


  document.querySelector("button").addEventListener("click", function () {
    html2canvas(document.querySelector(".match-scoreboard"), {
      onrendered: function (canvas) {
        // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
      },
    });
  });


//  const canvasRef = React.useRef(null);
//   const SaveImageToLocal =(event)=> {
//     let link = event.currentTarget;
//     link.setAttribute('download', 'football.png');
//     let image = canvasRef.current.toDataURL('image/png');
//     link.setAttribute('href', image);
//   }
  return (
    <div id="match-scoreboard" ref={Canvas2Image}>
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
        </div>
        <div className="inputs">
          <div>
            <input
              type="number"
              placeholder="0"
              onChange={handleChange}
              value={teamAScore}
              className="input1"
            />
          </div>
          <p className="twodots">:</p>
          <div>
            <input
              type="number"
              placeholder="0"
              onChange={handleChange1}
              value={teamBScore}
            />
          </div>
        </div>
        <div className="team2">
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
      <button type="button" className="button">
        Capture Screen
      </button>
      {/* <button className="button">
        <a
          id="Capture_image_link"
          href="capture_link"
          onClick={SaveImageToLocal}
        >
          Capture Image
        </a>
      </button> */}
    </div>
  );
}
 