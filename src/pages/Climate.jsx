import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const regionsOfGhana = [
  "Greater Accra",
  "Ashanti",
  "Northern",
  "Eastern",
  "Western",
  "Volta",
  "Upper East",
  "Upper West",
  "Central",
  "Brong Ahafo",
  "Western North",
  "Ahafo",
  "Savannah",
  "Oti",
  "Bono East",
  "North East",
];

// Sample climate data for current weather
const climateData = {
  "Greater Accra": { temp: 30, humidity: 75, precipitation: 50 },
  Ashanti: { temp: 28, humidity: 80, precipitation: 60 },
  Northern: { temp: 35, humidity: 65, precipitation: 20 },
  Eastern: { temp: 29, humidity: 70, precipitation: 55 },
  Western: { temp: 27, humidity: 85, precipitation: 90 },
  // Add similar data for other regions...
};

// Sample historical temperature data for different regions
const historicalTempData = {
  "Greater Accra": [28, 30, 32, 35, 33, 31, 30, 29, 28, 27, 26, 25],
  Ashanti: [27, 29, 31, 34, 33, 32, 31, 30, 29, 28, 27, 26],
  Northern: [30, 32, 34, 36, 35, 34, 33, 32, 31, 30, 29, 28],
  Eastern: [29, 31, 33, 34, 32, 31, 30, 29, 28, 27, 26],
  Western: [28, 30, 29, 31, 32, 33, 34, 35, 34, 33, 32, 31],
  // Add similar data for other regions...
};

// Sample historical precipitation data for different regions
const historicalPrecipitationData = {
  "Greater Accra": [50, 40, 60, 70, 80, 90, 100, 95, 80, 60, 50, 40],
  Ashanti: [55, 45, 65, 75, 85, 95, 105, 100, 85, 65, 55, 45],
  Northern: [20, 25, 30, 35, 40, 50, 60, 55, 50, 45, 40, 30],
  Eastern: [60, 70, 80, 90, 100, 110, 120, 115, 100, 80, 60, 50],
  Western: [90, 80, 100, 110, 120, 130, 140, 135, 120, 100, 90, 80],
  // Add similar data for other regions...
};

const ClimateReport = () => {
  const [selectedRegion, setSelectedRegion] = useState("Greater Accra");
  const [view, setView] = useState("current"); // Toggle between 'current' and 'historical'

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  // Display selected region's climate data
  const regionClimate = climateData[selectedRegion] || {};

  // Get temperature trends for the selected region
  const tempTrends = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: `Temperature in ${selectedRegion} (°C)`,
        data: historicalTempData[selectedRegion],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Get precipitation trends for the selected region
  const precipitationTrends = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: `Precipitation in ${selectedRegion} (mm)`,
        data: historicalPrecipitationData[selectedRegion],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-16">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
          Climate Report - {selectedRegion}
        </h1>

        {/* Dropdown for Region Selection */}
        <div className="flex flex-col sm:flex-row justify-between mb-6">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <label className="text-lg font-semibold block mb-2">
              Select Region:
            </label>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              {regionsOfGhana.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for View Selection */}
          <div className="w-full sm:w-1/2">
            <label className="text-lg font-semibold block mb-2">View:</label>
            <select
              value={view}
              onChange={handleViewChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="current">Current Climate</option>
              <option value="historical">Historical Trends</option>
            </select>
          </div>
        </div>

        {/* Climate Data Display Cards */}
        {view === "current" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-blue-700 text-xl font-bold">Temperature</h3>
              <p className="text-gray-800 text-2xl">
                {regionClimate.temp || "--"} °C
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-blue-700 text-xl font-bold">Humidity</h3>
              <p className="text-gray-800 text-2xl">
                {regionClimate.humidity || "--"} %
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-blue-700 text-xl font-bold">Precipitation</h3>
              <p className="text-gray-800 text-2xl">
                {regionClimate.precipitation || "--"} mm
              </p>
            </div>
          </div>
        ) : (
          <div>
            {/* Historical Data Display (Temperature Trends) */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Historical Temperature Trends
              </h2>
              <Line
                data={tempTrends}
                options={{
                  responsive: true,
                  scales: {
                    x: { title: { display: true, text: "Months" } },
                    y: { title: { display: true, text: "Temperature (°C)" } },
                  },
                }}
              />
            </div>

            {/* Precipitation Bar Chart */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Monthly Precipitation (mm)
              </h2>
              <Bar
                data={precipitationTrends}
                options={{
                  responsive: true,
                  scales: {
                    x: { title: { display: true, text: "Months" } },
                    y: { title: { display: true, text: "Precipitation (mm)" } },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClimateReport;
