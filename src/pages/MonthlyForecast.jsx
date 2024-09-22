import { FaDownload } from "react-icons/fa"; // For download icon

const MonthlyForecast = () => {
  const issuedDate = "September 1, 2024";
  const validPeriod = "September 2024";

  const forecastData = [
    {
      month: "September",
      description: "Above-average rainfall expected throughout the month.",
      temperature: "25-30°C",
    },
    {
      month: "October",
      description: "Cooler temperatures with increased chances of rainfall.",
      temperature: "20-28°C",
    },
    {
      month: "November",
      description: "Expected transition to dry conditions with warmer days.",
      temperature: "22-31°C",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-blue-800 text-4xl font-bold mb-4 text-center">
          Monthly Weather Forecast
        </h1>
        <p className="text-md text-gray-700 text-center mb-6">
          Issued Date: {issuedDate} | Valid Period: {validPeriod}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {forecastData.map((forecast, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {forecast.month}
              </h2>
              <p className="text-gray-600 mb-2">{forecast.description}</p>
              <p className="text-lg font-bold text-gray-800">
                Temperature: {forecast.temperature}
              </p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Download Full Forecast
          </h2>
          <p className="text-gray-600 mb-4">
            Access the detailed monthly forecast report.
          </p>
          <a
            href="/path/to/monthly-forecast.pdf"
            download
            className="bg-blue-600 text-white text-sm px-2 py-1 rounded flex items-center justify-center hover:bg-blue-700 transition duration-200"
          >
            <FaDownload className="mr-1" />
            Download Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default MonthlyForecast;
