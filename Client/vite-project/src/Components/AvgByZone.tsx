import React, { useState } from "react";
import { avgByZone } from "../Components/fatchAPI";

const AvgByZone: React.FC<{
  updateMap: (lat: number, lng: number, info: string) => void
}> = ({ updateMap }) => {
  const [zone, setZone] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!zone) return;
    const result = await avgByZone(zone);
    setData(result)

    console.log(result[0].lat);
    
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
      <h3>ממוצע לפי אזור</h3>
      <input
        type="text"
        placeholder="הכנס אזור"
        value={zone}
        onChange={(e) => setZone(e.target.value)}
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

export default AvgByZone;
