import React from "react";
import { Clubs } from "./data/Constdata";
import { useState } from "react";

export default function Table() {
  
  const [firstTeam, setFirstTeam] = useState(null);
  const [secondTeam, setSecondTeam] = useState(null);
  const [matchtype, setMatchtType] = useState("club");
  const [ teamScores, setTeamScores] = useState({
    firstTeam: null,
    secondTeam: null,
  })

    const clubs = club.Clubs.map((item, index)=>{
      return { value: index, label: item.name};
    });

    const countries = data.countries.map((item, index)=>{
       return { value: index, label: item.name};
    });

    const handleChangeForFirstTeam = (SelectedOption) =>{
      setFirstTeam(SelectedOption.value);
    };

    const handleChangeForSecondTeam = (SelectedOption) => {
      setSecondTeam(SelectedOption.value);
    };

    function generateRandomScore(){
      return Math.round(Math.random() *10);
    }

    const onSubmit = () =>{
      setTeamScores ((
        firstTeamScores: generateRandomScore(),
        secondTeamScores: generateRandomScore(),
      ));
    },

  return (

    <form>
      <h1>Place your Bet</h1>
      <div>
        <div>
        <select name="FirstTeam" id="">firstTeam</select>
        <input type="number" name="score" id="" />
        </div>
        <div>
        <select name="SecondTeam" id="">secondTeam</select>
        <input type="number" name="score" id="" />
        </div>
      </div>
    </form>
    // <div className="bg-gray-400 grig grid-cols-1 divide-y text-black">
    //   {Clubs.map((club) => (
    //     <div>
    //       <div key={club.name} className="bg-white-400 py-2">
    //         <h2>{club.name}</h2>
    //         <img src={club.url} alt="" />
    //       </div>
    //     </div>
    //   ))}
    //   {countries.map((kontry) => (
    //     <li key={kontry.country}>
    //       <p>code:{kontry.code}</p>
    //       <p>flag:{kontry.flag}</p>
    //     </li>
    //   ))}
    // </div>
  );
} 


