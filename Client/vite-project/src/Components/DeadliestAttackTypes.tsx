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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DeadliestAttackTypes: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/analysis/deadliest-attack-types/`);
        const result = await response.json();
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
  

  const handleFilterChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  useEffect(() => {
    if (showAll) {
      setFilteredData(data);
    } else {
      if (selectedTypes.length > 0) {
        setFilteredData(data.filter((item) => selectedTypes.includes(item._id)));
      } else {
        setFilteredData([]);
      }
    }
  }, [selectedTypes, data, showAll]);

  const chartData = {
    labels: Array.isArray(filteredData) ? filteredData.map((item) => item._id) : [],
    datasets: [
      {
        label: "מספר נפגעים",
        data: Array.isArray(filteredData) ? filteredData.map((item) => item.count) : [],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };
  

  return (
    <div>
      <h3>סוגי התקפות הקטלניים ביותר</h3>
      <div>
        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={showAll}
            onChange={(e) => setShowAll(e.target.checked)}
          />
          הצג את כל סוגי ההתקפות
        </label>
        {!showAll && (
          <div>
            {data.map((item) => (
              <label key={item._id} style={{ marginRight: "10px" }}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(item._id)}
                  onChange={() => handleFilterChange(item._id)}
                />
                {item._id}
              </label>
            ))}
          </div>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
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
                text: "מספר הנפגעים לפי סוג התקפה",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DeadliestAttackTypes;
