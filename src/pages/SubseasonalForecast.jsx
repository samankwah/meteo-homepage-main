const SubseasonalForecast = () => {
  // Sample data for the subseasonal forecast
  const forecastData = {
    period: "October - December 2024",
    summary:
      "Mostly above-average rainfall expected across the region, with occasional dry spells. Temperature will generally remain near average.",
    temperatureOutlook: "Near to slightly above average",
    rainfallOutlook: "Above average in most areas",
    windOutlook: "Mild to moderate winds",
    advisories:
      "Farmers are advised to prepare for a wetter-than-usual season and take precautions to prevent flooding in low-lying areas.",
  };

  const handleDownload = () => {
    // Replace with the actual file download link or logic
    const fileUrl = "/path-to-subseasonal-forecast.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="relative main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col items-center pt-24">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500 focus:outline-none"
      >
        Download Forecast
      </button>

      {/* Page Title */}
      <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold mb-4">
        Subseasonal Forecast
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Forecast for the period: {forecastData.period}
      </p>

      {/* Forecast Summary Card */}
      <div className="forecast-card bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Summary</h2>
        <p className="text-gray-700 mb-4">{forecastData.summary}</p>

        <div className="forecast-details grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Temperature Outlook
            </h3>
            <p className="text-gray-600">{forecastData.temperatureOutlook}</p>
          </div>
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Rainfall Outlook
            </h3>
            <p className="text-gray-600">{forecastData.rainfallOutlook}</p>
          </div>
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Wind Outlook
            </h3>
            <p className="text-gray-600">{forecastData.windOutlook}</p>
          </div>
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">Advisories</h3>
            <p className="text-gray-600">{forecastData.advisories}</p>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="map-card bg-white shadow-md rounded-lg p-4 w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Forecast Map
        </h2>
        <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80">
          <p className="text-center text-gray-700">
            Map for subseasonal forecast goes here
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubseasonalForecast;
