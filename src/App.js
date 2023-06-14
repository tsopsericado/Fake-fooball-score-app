// import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import { Clubs, countries } from "./component/data/Constdata";
import Table from "./component/Table";
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
    <div
      className="w-full md:-[700px] lg:-[800px] m-auto"
      style={{
        backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.proximus.com%2Fnews%2F2023%2F20230209-news-uefa-champions-league-round-of-16-on-proximus-pickx.html&psig=AOvVaw3YdU4gx6ECB9VmgL8486Jx&ust=1686822703735000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJjNpLS-wv8CFQAAAAAdAAAAABAD)`,
      }}
    >
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/table" element={<Table />} />
          <Route
            path="/matchlist/:matchID"
            element={<MatchList club={(Clubs, countries)} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
