import forecastImage from "../assets/images/weather warning.jpg";
import { FaDownload } from "react-icons/fa"; // For download icon

const SeasonalForecast = () => {
  return (
    <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 p-2 min-h-screen">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-blue-600 text-3xl font-bold">
          SEASONAL WEATHER FORECAST FOR SEPTEMBER OCTOBER NOVEMBER (SON) 2024
        </h1>
        {/* Download Button */}
        <a
          href="/path/to/your/file.pdf"
          download
          className="bg-blue-600 text-white px-2 py-2 rounded flex items-center hover:bg-blue-700"
        >
          <FaDownload className="mr-2" />
          Download Seasonal Forecast
        </a>
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-start">
        <div className="flex-2 lg:mb-6 lg:mr-4 h-auto">
          <img
            src={forecastImage}
            alt="Seasonal Forecast"
            className="forecast-image rounded shadow-lg"
            style={{ maxWidth: "100%", height: "760px" }}
          />
        </div>

        {/* Highlights Section */}
        <div className="highlights bg-white p-6 rounded shadow-lg flex-1 ">
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <p className="text-lg">
            1. <strong>Rainfall Outlook</strong> for the
            September-October-November 2024 Minor Rains Season.
            <br />
            The Climate Outlook for the September-October-November (SON) 2024
            Minor Rains season indicates that the western sector of the country
            is expected to receive near to slightly above average rainfall while
            the central parts of the country and isolated areas over northeast
            and southeastern lowlands are predicted to receive near to below
            average rainfall. The Coastal region, most of the Southeastern
            lowlands and Northeastern Ghana are expected to receive below
            average rainfall. This will be driven by weak La Nina conditions
            which are likely to develop during September to November and persist
            into early 2025 and a neutral Indian Ocean Dipole. The distribution
            is expected to be poor over most parts of the country with prolonged
            dry spells and cases of isolated storms. Temperature is expected to
            be warmer than average over most parts of the country, except over a
            few areas in the western sector where temperature is expected to be
            near normal. Higher probabilities for warmer than average
            temperatures are expected over central and eastern sectors of the
            country. The Coastal region, most of the Southeastern lowlands and
            Northeastern Ghana are expected to receive below average rainfall.
            This will be driven by weak La Nina conditions which are likely to
            develop during September to November and persist into early 2025 and
            a neutral Indian Ocean Dipole. The distribution is expected to be
            poor over most parts of the country with prolonged dry spells and
            the western sector where temperature is expected to be near normal.
            Higher probabilities for warmer than average temperatures are
            expected over central and eastern sectors of the country. The
            Coastal region, most of the Southeastern lowlands and Northeastern
            Ghana are expected to receive below average rainfall. This will be
            driven by weak La Nina conditions which are likely to develop during
            September to November and persist into early 2025 and a neutral
            Indian Ocean Dipole. The distribution is expected to be poor over
            most parts of the country with prolonged dry spells and cases of
            isolated storms. Temperature is expected to be warmer than average
            over most parts of the country, except over a few areas in the
            western sector where temperature is expected to be near normal.
            Higher probabilities for warmer than average temperatures are
            expected over central and eastern sectors of the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeasonalForecast;
