import React, { useEffect, useState } from "react";
import { club } from "../../component/data/DummyData";
import "./Table.css";
import { useNavigate } from "react-router-dom";

export default function Table() {
  const [val, setVal] = useState("");
  const [clubs, setClubs] = useState([]);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setClubs(club.clubs);
    setCountries(club.countries);
  }, [clubs]);

  console.log(val.charAt(0));

  const updateStorage = (teamData) => {
    localStorage.setItem("teamData", JSON.stringify(teamData));
  };

  const chooseTeam = (team) => {
    const locaTeam = JSON.parse(localStorage.getItem("teamData"));

    if (!locaTeam) return navigate("/");

    if (locaTeam.choice === "teamA") {
      locaTeam.teams.teamA = team;
      updateStorage(locaTeam);
    }

    if (locaTeam.choice === "teamB") {
      locaTeam.teams.teamB = team;
      updateStorage(locaTeam);
    }

    navigate("/");
  };

  return (
    <div className="tablehead">
      <div className="searchdiv">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </div>
      <div className="teams">
        <div className="country">
          <h1 className="teamList">
            Con<span>tries</span>
          </h1>
          {val !== ""
            ? club.clubs
                .filter(
                  (clubss) =>
                    clubss.name.toLocaleLowerCase() === val.toLocaleLowerCase()
                )
                .map((filteredclub) => {
                  return (
                    <div
                      key={filteredclub.name}
                      className="countryImage"
                      // onClick={() => chooseTeam(count)}
                    >
                      <img src={filteredclub.url} alt="flag" />
                      <h1 className="name">{filteredclub.name}</h1>
                    </div>
                  );
                })
            : countries?.map((count, index) => {
                return (
                  <div
                    key={count.country + index}
                    className="countryImage"
                    onClick={() => chooseTeam(count)}
                  >
                    <img src={count.flag} alt="flag" className="image" />
                    <h1 className="name">{count.country}</h1>
                    <hr />
                  </div>
                );
              })}
        </div>

        <div className="club">
          <h1 className="teamList">
            C<span>lu</span>b
          </h1>
          {val !== ""
            ? club.countries
                .filter(
                  (count) =>
                    count.country.toLocaleLowerCase() ===
                    val.toLocaleLowerCase()
                )
                .map((filteredcount) => {
                  return (
                    <div
                      key={filteredcount.country}
                      className="countryImage"
                      // onClick={() => chooseTeam(count)}
                    >
                      <img src={filteredcount.flag} alt="flag" />
                      <h1 className="name">{filteredcount.country}</h1>
                    </div>
                  );
                })
            : clubs?.map((club, index) => {
                return (
                  <div
                    key={club.name + index}
                    className="countryImage"
                    onClick={() => chooseTeam(club)}
                  >
                    <img src={club.url} alt="flag" className="image" />
                    <h1 className="name">{club.name}</h1>
                    <hr />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

//<>
//   <div>
//     {club.clubs.map((match)=>(
//       <div>{match.name.url}</div>
//     ))}
//  </div>

//   <div>
//   {club.countries.map((match)=>(
//   <div>{match.country.code.flag}</div>
//   ))}
// </div>
//</>;

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
