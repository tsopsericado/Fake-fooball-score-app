import React, { useEffect, useState } from "react";
import { club } from "../data/DummyData";
import './Table.css'
//import { useState } from "react";

export default function Table() {
  const [clubs, setClubs] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setClubs(club.clubs);
    setCountries(club.countries);
  }, [clubs]);

  const handleCountryChange =(e) =>{
    e.preventDefault();
    setClubs(e.target.value);
  }

  if (clubs.length > 0) { 
    clubs.filter((team) => {
      return team.name.path.match(clubs);
    });
  }

    const handleClubChange = (e) => {
      e.preventDefault();
      setCountries(e.target.value);
    };


  if (countries.length > 0) {
    countries.filter((count) => {
      return count.country.flag.match(countries);
    });
  }

  // console.clear();
  console.log(clubs);
  console.log(countries);
  console.log(club);
  return (
    <div className="tablehead">
      <h1>countries and clubs</h1>
      <div className="teams">
        <div className="country">
          <input
            type="search"
            placeholder="Search here"
            onChange={handleCountryChange}
            value={countries}
          />

          {countries?.map((count, index) => {
            return (
              <div key={count.country + index} className="countryImage">
                <img src={count.flag} alt="flag" />
                <h1 className="name">{count.country}</h1>
              </div>
            );
          })}
        </div>

        <div className="club">
          <input
            type="search"
            placeholder="Search here"
            onChange={handleClubChange}
            value={clubs}
          />

          {clubs?.map((team, index) => {
            return (
              <div key={team.clubs + index}>
                <img src={team.url} alt="flag" />
                <h1 className="name">{team.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

<>
  {/* <div>
      {club.clubs.map((match)=>( 
        <div>{match.name.url}</div>
      ))}
    </div>
  
    <div>
      {club.countries.map((match)=>(
       <div>{match.country.code.flag}</div>
      ))}
    </div> */}
</>;

// const [firstTeam, setFirstTeam] = useState(null);
// const [secondTeam, setSecondTeam] = useState(null);
// const [matchtype, setMatchtType] = useState("club");
// const [ teamScores, setTeamScores] = useState({
//   firstTeam: null,
//   secondTeam: null,
// })

//   const Clubs = data.Clubs.map((item, index)=>{
//     return { value: index, label: item.name};
//   });

//   const countries = data.countries.map((item, index)=>{
//      return { value: index, label: item.name};
//   });

//   const handleChangeForFirstTeam = (SelectedOption) =>{
//     setFirstTeam(SelectedOption.value);
//   };

//   const handleChangeForSecondTeam = (SelectedOption) => {
//     setSecondTeam(SelectedOption.value);
//   };

//   function generateRandomScore(){
//     return Math.round(Math.random() *10);
//   }

//   const onSubmit = () =>{
//     setTeamScores ((
//       firstTeamScores: generateRandomScore(),
//       secondTeamScores: generateRandomScore(),
//     ));
//   },

// <form>
//   <h1>Place your Bet</h1>
//   <div>
//     <div>
//     <select name="FirstTeam" id="">firstTeam</select>
//     <input type="number" name="score" id="" />
//     </div>
//     <div>
//     <select name="SecondTeam" id="">secondTeam</select>
//     <input type="number" name="score" id="" />
//     </div>
//   </div>
//   <button type="button">Bet</button>
// </form>

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
//   console.log(countries)
// </div>
