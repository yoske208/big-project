import React, { useState } from "react";
import { byID } from "./fatchAPI";

const IncidentByID: React.FC<{ updateMap: (lat: number, lng: number, info: string) => void }> = ({ updateMap }) => {
  const [id, setId] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!id) return;
    const result = await byID(id);
    setData(result);

    if (result && result.latitude && result.longitude) {
      
      updateMap(result.latitude, result.longitude, JSON.stringify(result, null, 2));
    }
  };

  return (
    <div>
      <h3>חיפוש לפי מזהה</h3>
      <input
        type="text"
        placeholder="הכנס מזהה"
        value={id}
        onChange={(e) => setId(e.target.value)}
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

export default IncidentByID;
