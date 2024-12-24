import React from "react";
import { Route, Routes } from "react-router-dom";
import AttacType from "../Components/AttacTypeComp/AttacType";
import { AnalysisContext } from "../Providers/AnalysisProvider";
// import TerrorComponent from "../Components/AttacTypeComp/a";
import Home from "../Pages/Home";
import ById from "../Pages/ById";
import Dashboard from "../Components/Dashboard";
import CRUD from "../Components/HOME/CRUD";
import HomePage from "../Components/HOME/HomePage";
import { Update } from "@mui/icons-material";
import UpdateTerror from "../Components/HOME/UPDATE";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AttacType terrors={terrors} />} /> */}
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/byid" element={<ById/>}></Route> */}
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/crud" element={<HomePage />}></Route>
        <Route path="/crud/add" element={<CRUD />}></Route>
        <Route path="/crud/update" element={<UpdateTerror />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
