import React, { useState, useEffect } from "react";

const UpdateTerror: React.FC = () => {
  const [id, setId] = useState(""); // ID של המסמך לעדכון
  const [terrorData, setTerrorData] = useState({
    eventid: "",
    iyear: "",
    imonth: "",
    iday: "",
    country_txt: "",
    region_txt: "",
    city: "",
    latitude: "",
    longitude: "",
    attacktype1_txt: "",
    targtype1_txt: "",
    target1: "",
    gname: "",
    weaptype1_txt: "",
    nkill: "",
    nwound: "",
    ransomamt: "",
  });
  const [responseMessage, setResponseMessage] = useState(""); // הודעת תגובה מהשרת

  // Fetch existing data by ID
  const fetchTerrorData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/crud/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTerrorData(data); // טען את המידע לטופס
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/crud/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(terrorData),
      });

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      const data = await response.json();
      setResponseMessage("Update successful!");
      console.log(data);
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Edit Terror Data</h2>
      <div>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button onClick={fetchTerrorData}>Fetch Data</button>
      </div>
      <div className="form-container">
        {Object.keys(terrorData).map((key) => (
          <div key={key} className="form-group">
            <label htmlFor={key}>{key}:</label>
            <input
              id={key}
              type="text"
              value={(terrorData as any)[key]}
              onChange={(e) =>
                setTerrorData({ ...terrorData, [key]: e.target.value })
              }
            />
          </div>
        ))}
      </div>
      <button onClick={handleUpdate}>Update</button>
      <p>{responseMessage}</p>
    </div>
  );
};

export default UpdateTerror;
