import React, { useState } from "react";
import {  getByYears} from "../Components/fatchAPI";

const IncidentTrendsBetwen2: React.FC = () => {
  const [year1, setYear1] = useState<number | string>("");
  const [year2, setYear2] = useState<number | string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!year1 || !year2) return;
    const result = await getByYears(Number(year1), Number(year2));
    setData(result);
  };

  return (
    <div>
      <h3>מגמות תקריות לפי שנה</h3>
      <input
        type="number"
        placeholder="הכנס שנה"
        value={year1}
        onChange={(e) => setYear1(e.target.value)}
      />
       <input
        type="number"
        placeholder="הכנס שנה"
        value={year2}
        onChange={(e) => setYear2(e.target.value)}
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

export default IncidentTrendsBetwen2;
