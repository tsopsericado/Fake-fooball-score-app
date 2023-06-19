import "./App.css";
// import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import Table from "./pages/Table/Table";
import MatchScoreboard from "./pages/MatchScores/MatchScoreboard";
import { club } from "./component/data/DummyData";

function App() {
  console.log(club);
  return (
    <div className="landing">
      <NavBar />
      {/* <TableContext.Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/table" element={<Table data={club} />} />
          <Route path="/" element={<MatchScoreboard />} />
        </Routes>
      </BrowserRouter>
      {/* </TableContext.Provider> */}
    </div>
  );
}

export default App;
