import { Line } from "react-chartjs-2";

const chartData = {
    labels: energyData.map((data) => new Date(data.date).toLocaleDateString()),
    datasets: [
        {
            label: "Energy Consumption (kWh)",
            data: energyData.map((data) => data.consumption),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
    ],
};

return (
    <div>
        <h2>Energy Consumption Report</h2>
        <Line data={chartData} />
    </div>
);
