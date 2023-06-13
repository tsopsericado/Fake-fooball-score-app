import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import NavBar from "./component/NavBar";
import { Clubs, countries } from "./component/data/Constdata";  
import Table from "./component/Table";
import { fetchFixtures } from "./lib/fetch-data";
import MatchList from "./component/MatchList";


function App() {


    //  const fetchData = async () => {
    //   const fixtures = await fetchFixtures();
    //   console.log(fixtures);
    //  };

    //  useEffect(()=>{
    //    fetchData(); 
    //  })
  console.log(Clubs);
  return (
    <div className="">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table club={(Clubs, countries)} />} />
          <Route path="/matchlist/:matchID" element={<MatchList club={(Clubs, countries)} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App