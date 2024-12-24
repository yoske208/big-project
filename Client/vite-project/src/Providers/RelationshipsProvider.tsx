
import {  TerrorModel} from "../Interface/Interfaces";
import useFatch from "../Hooks/fetch";
import React, { SetStateAction, useEffect, useState } from "react";
const url = "http://localhost:6060/api/relationships"


export interface Props {
  children: React.ReactNode;
}

export interface RelationProps {
  terrors: TerrorModel[];
  setTerrors: React.Dispatch<SetStateAction<TerrorModel[]>>;
}

export const RelationContext = React.createContext<RelationProps>({
  terrors: [],
  setTerrors: () => {},
});

const RelationProvider = ({ children }: Props) => {
  const [terrors, setTerrors] = useState<TerrorModel[]>([]);
  const {getFatch,data} = useFatch<TerrorModel[]>(url)
  useEffect(()=>{
    getFatch()

  },[])

  useEffect(() => {
    if (data) return setTerrors(data);
    console.log("no results");
  }, [data]);
  




  return (
    <div>
      <RelationContext.Provider value={{ terrors: terrors, setTerrors: setTerrors }}>
        {children}
      </RelationContext.Provider>
    </div>
  );
};

export default RelationProvider;
