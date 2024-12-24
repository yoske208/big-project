import { TerrorModel } from "../Interface/Interfaces";
import React, { SetStateAction, useEffect, useState } from "react";
import {
  avgAttackType,
  avgByZone,
  getByYear,
  byID,
  get5ByBigOrganizatoion,
  organizationByYear,
  organizationByZone,
} from "../Components/fatchAPI";
import useFatch from "../Hooks/UseFetch";
const url = "${import.meta.env.VITE_URL}/crud/";

export interface Props {
  children: React.ReactNode;
}

export interface TerrorProps {
  terrors: TerrorModel[];
  setTerrors: React.Dispatch<SetStateAction<TerrorModel[]>>;
}

export const AnalysisContext = React.createContext<TerrorProps>({
  terrors: [],
  setTerrors: () => {},
});

const AnalysisProvider = ({ children }: Props) => {
  const [terrors, setTerrors] = useState<TerrorModel[]>([]);
  const { data, getFatch } = useFatch<TerrorModel[]>(url);

  useEffect(() => {
    getFatch();
  }, []);

  useEffect(() => {
    if (data) return setTerrors(data);
    console.log("no results");
  }, [data]);

  return (
    <div>
      <AnalysisContext.Provider value={{ terrors, setTerrors }}>
        {children}
      </AnalysisContext.Provider>
    </div>
  );
};

export default AnalysisProvider;
