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

type DataVisualizationProps = {
  fetchData: () => Promise<any>;
  title: string;
};

const DataVisualization: React.FC<DataVisualizationProps> = ({ fetchData, title }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      const labels = data.map((item: any) => item._id);
      const values = data.map((item: any) => item.count);

      setChartData({
        labels,
        datasets: [
          {
            label: title,
            data: values,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
          },
        ],
      });
    };

    loadData();
  }, [fetchData, title]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h3>{title}</h3>
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
              text: title,
            },
          },
        }}
      />
    </div>
  );
};

export default DataVisualization;
