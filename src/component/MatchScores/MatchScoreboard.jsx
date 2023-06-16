import React, {useState} from 'react'


export default function MatchScoreboard() {

    const [teamAScore, setTeamAScore] =useState(0);
    const [teamBScore, setTeamBScore] = useState(1);

  return (
    <div className="match-scoreboard">
      <div className="team-a">
        <div className="team-name">Team A</div>
        <div className='team-score'>{teamAScore}</div>
      </div>

      <div className='team-b'>
        <div className='team-name'>Team B</div>
        <div className='team-score'>{teamBScore}</div>
      </div>
    </div>
  );
}
