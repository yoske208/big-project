import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { avgByZone } from "../Components/fatchAPI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DeadliestRegions: React.FC<{
  updateMap: (lat: number, lng: number, info: string) => void;
}> = ({ updateMap }) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [zone, setZone] = useState<string>("");
  const [zoneData, setZoneData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6060/api/analysis/highest-casualty-regions/");
        const result = await response.json();
        console.log("Fetched Data:", result); 
        setData(Array.isArray(result) ? result : []);
        setFilteredData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
        setFilteredData([]);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (region: string) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  useEffect(() => {
    if (showAll) {
      setFilteredData(data);
    } else if (selectedRegions.length > 0) {
      setFilteredData(data.filter((item) => selectedRegions.includes(item._id)));
    } else {
      setFilteredData([]);
    }
  }, [selectedRegions, data, showAll]);

  const fetchZoneData = async () => {
    if (!zone) return;
    try {
      const result = await avgByZone(zone);
      console.log("Zone Data:", result); 
      setZoneData(result);

      if (result && result[0].lat && result[0].lng) {
        updateMap(
          result[0].lat,
          result[0].lng,
          JSON.stringify(result, null, 2)
        );
      }
    } catch (error) {
      console.error("Error fetching zone data:", error);
    }
  };

  const updateAllLocationsOnMap = () => {
    if (filteredData && filteredData.length > 0) {
      const allPoints: any[]= [];
      filteredData.forEach((location, index) => {
        if (location.lat && location.lng) {
          console.log(`Adding location #${index} to map:`, location);
          allPoints.push({
            lat: location.lat,
            lng: location.lng,
            info: JSON.stringify(location, null, 2),
          })
          console.log("allPoints", allPoints);
        } else {
          console.warn(`Missing lat/lng for location #${index}:`, location);
        }
      });
  
      if (allPoints.length > 0) {
        allPoints.forEach((point: any) =>
          updateMap(point.lat, point.lng, point.info)
        );
      }
    } else {
      console.warn("No locations available to update the map");
    }
  };
  
  
  
  useEffect(() => {
    updateAllLocationsOnMap();
  }, [filteredData]);
  
  
  useEffect(() => {
    updateAllLocationsOnMap();
  }, [filteredData]);
  

  useEffect(() => {
    updateAllLocationsOnMap();
  }, [filteredData]);

  const chartData = {
    labels: Array.isArray(filteredData) ? filteredData.map((item) => item._id) : [],
    datasets: [
      {
        label: "מספר נפגעים",
        data: Array.isArray(filteredData) ? filteredData.map((item) => item.avg || 0) : [],
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
      },
    ],
  };

  return (
    <div>
      <h3>האזורים הקטלניים ביותר</h3>
      <div>
        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={showAll}
            onChange={(e) => setShowAll(e.target.checked)}
          />
          הצג את כל האזורים
        </label>
        {!showAll && (
          <div>
            {data.map((item) => (
              <label key={item._id} style={{ marginRight: "10px" }}>
                <input
                  type="checkbox"
                  checked={selectedRegions.includes(item._id)}
                  onChange={() => handleFilterChange(item._id)}
                />
                {item._id}
                {item.avg}
              </label>
            ))}
          </div>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        {filteredData.length > 0 ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "מספר הנפגעים לפי אזור",
                },
              },
            }}
          />
        ) : (
          <p>אין נתונים להצגה</p>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>ממוצע לפי אזור</h3>
        <input
          type="text"
          placeholder="הכנס אזור"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        />
        <button onClick={fetchZoneData}>שלח</button>
        {zoneData && (
          <div>
            <h4>תוצאות:</h4>
            <pre>{JSON.stringify(zoneData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeadliestRegions;
