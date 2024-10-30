import s2s from "../assets/images/s2s.png";
import { useNavigate } from "react-router-dom";

const SubseasonalForecast = () => {
  // Sample data for the subseasonal forecast
  const forecastData = {
    period: "October 4 - 17 2024",
    summary:
      "Mostly above-average rainfall expected across the region, with occasional dry spells. Temperature will generally remain near average.",
    temperatureOutlook: "Near to slightly above average",
    rainfallOutlook: "Above average in most areas",
    windOutlook: "Mild to moderate winds",
    advisories:
      "Farmers are advised to prepare for a wetter-than-usual season and take precautions to prevent flooding in low-lying areas.",
  };
  const navigate = useNavigate();

  const handleDownload = () => {
    // Replace with the actual file download link or logic
    const fileUrl = "/S2S Forecast_04_10_24_mofa.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="relative main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col items-center pt-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="text-teal-500 hover:text-teal-600 flex items-center gap-2 transition-colors mb-6"
        >
          <span>←</span>
          <span className="text-sm font-medium">GO BACK</span>
        </button>
        {/* Header and Download Button Wrapper */}
        <div className="w-full max-w-6xl flex justify-center items-center mb-6">
          {/* Page Title */}
          <h1 className="text-blue-900 text-2xl sm:text-3xl font-bold text-center flex-grow">
            Subseasonal Forecast
          </h1>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-blue-900 text-white text-lg px-6 py-3 rounded shadow hover:bg-blue-500 transition duration-300 focus:outline-none"
          >
            Download
          </button>
        </div>

        {/* Forecast Period */}
        <div className="w-full max-w-6xl">
          <p className="text-gray-700 text-center mb-6">
            Forecast for the period: {forecastData.period}
          </p>
        </div>

        {/* Forecast Summary Card */}
        <div className="forecast-card bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Summary</h2>
          <p className="text-gray-700 mb-4">{forecastData.summary}</p>

          <div className="forecast-details grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="forecast-item bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Temperature Outlook
              </h3>
              <p className="text-gray-600">{forecastData.temperatureOutlook}</p>
            </div>
            <div className="forecast-item bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Rainfall Outlook
              </h3>
              <p className="text-gray-600">{forecastData.rainfallOutlook}</p>
            </div>
            <div className="forecast-item bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Wind Outlook
              </h3>
              <p className="text-gray-600">{forecastData.windOutlook}</p>
            </div>
            <div className="forecast-item bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Advisories
              </h3>
              <p className="text-gray-600">{forecastData.advisories}</p>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="map-card bg-white shadow-md rounded-lg p-4 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Forecast Map
          </h2>
          <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80 flex items-center justify-center">
            <img
              src={s2s} // Replace this with the actual image path
              alt="Subseasonal Forecast Map"
              className="h-full w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubseasonalForecast;
