import React, { useState } from "react";
import {organizationAndYear } from "../Components/fatchAPI";

const YearByOrganizations: React.FC<{ updateMap: (lat: number, lng: number, info: string) => void }> = ({ updateMap }) => {
  const [org, setORG] = useState< string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!org) return;
    const result = await organizationAndYear(org);
    setData(result);

    
    if (result && result[0].lat && result[0].lng) {
      console.log("resultoooo", result);
      updateMap(
        result[0].lat,
        result[0].lng,
        JSON.stringify(result, null, 2)
      );
    }
  };

  return (
    <div>
      <h3>לפי ארגון  </h3>
      <input
        type="text"
        placeholder="  שם הקבוצה"
        value={org}
        onChange={(e) => setORG(e.target.value)}
      />
       
      <button onClick={fetchData}>שלח</button>
      {data && (
        <div>
          <h4>תוצאות:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default YearByOrganizations;
