import React, { useContext } from "react";
import { AnalysisContext } from "../Providers/AnalysisProvider";
import AttacType from "../Components/AttacTypeComp/AttacType";
import Aaa from "../Components/aaa";
import ById from "../Components/ByIdComp/ById";

const Home = () => {
  const { terrors } = useContext(AnalysisContext);
  if (terrors) {
    return <>
    <AttacType terrors={terrors} />
    {/* <ById terrors={terrors} /> */}
    <Aaa />
    </>;
  }
};

export default Home;
