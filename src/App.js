import './App.css';
// import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import Table from "./component/Table/Table";
// import FetchData from "./component/FetchData";
import { club } from "./component/data/DummyData";

function App() {
  console.log(club);
  return (
    <div className="landing">
      <NavBar />
      {/* <Table data={club}/> */}
      <TableContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/table" element={<Table data={club} />} />
            {/* <Route path="/fetchdata" element={<FetchData />} /> */}
            {/* <Route path="/dummydata" element={<DummyData />} /> */}
          </Routes>
        </BrowserRouter>
      </TableContext.Provider>
    </div>
  );
}

export default App;
