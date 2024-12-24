import React, { useState } from "react";
import { getByBigOrganizatoion } from "./fatchAPI";

const TopAllOrganizations: React.FC = () => {
  const [region, setRegion] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    if (!region) return;
    const result = await getByBigOrganizatoion(region);
    setData(result);
  };

  return (
    
    
    <div>
    <h3>  ארגונים ראשיים לפי אזור</h3>
    <input
    type="text"
    placeholder="הכנס אזור"
    value={region}
    onChange={(e) => setRegion(e.target.value)}
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

export default TopAllOrganizations;
