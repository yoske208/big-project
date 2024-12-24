import React from "react";
import { Route, Routes } from "react-router-dom";
import AttacType from "../Components/AttacTypeComp/AttacType";
import { AnalysisContext } from "../Providers/AnalysisProvider";
// import TerrorComponent from "../Components/AttacTypeComp/a";
import Home from "../Pages/Home";
import ById from "../Pages/ById";
import Dashboard from "../Components/Dashboard";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AttacType terrors={terrors} />} /> */}
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/byid" element={<ById/>}></Route> */}
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
