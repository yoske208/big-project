import React, { useState } from "react";
import { organizationByYear } from "../Components/fatchAPI";

const OrganizationsByYear: React.FC = () => {
  const [year1, setYear1] = useState<number | string>("");
  const [year2, setYear2] = useState<number | string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!year1) return;
    const result = await organizationByYear(Number(year1), Number(year2));
    setData(result);
  };

  return (
    <div>
      <h3>ארגונים לפי שנים</h3>
      <input
        type="number"
        placeholder="  משנת"
        value={year1}
        onChange={(e) => setYear1(e.target.value)}
      />
       <input
        type="number"
        placeholder="  עד שנת"
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

export default OrganizationsByYear;
