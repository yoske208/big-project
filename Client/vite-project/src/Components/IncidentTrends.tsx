import React, { useState } from "react";
import { getByYear } from "../Components/fatchAPI";

const IncidentTrends: React.FC = () => {
  const [year, setYear] = useState<number | string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!year) return;
    const result = await getByYear(Number(year));
    setData(result);
  };

  return (
    <div>
      <h3>מגמות תקריות לפי שנה</h3>
      <input
        type="number"
        placeholder="הכנס שנה"
        value={year}
        onChange={(e) => setYear(e.target.value)}
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

export default IncidentTrends;
