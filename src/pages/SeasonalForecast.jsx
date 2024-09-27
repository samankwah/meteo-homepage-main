import forecastImage from "../assets/images/minorfcst2024.png";
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
          href="/public/FORECAST FOR THE MINOR RAINY SEASON-2024-1 final.pdf" // Correct path to the PDF in the public folder
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
            The 2024 Minor Season is expected to have above normal to normal
            rainfall for the extreme north and the forest zone. The transition,
            most portions of the north and east coast are forecasted to
            experience normal to above normal rainfall. Late to normal onset of
            rains are expected over most areas in the southern part of the
            country. Most parts of the southern sector are expected to have
            short to normal dry spells with the transition likely to record long
            to normal dry spells within the early part of the season. The second
            dry spell for the entire coast is expected to be long to normal,
            whereas the transition and the forest zone is expected to have
            normal to short dry spells. Normal to late cessation is predicted
            for the southern half of the country. The east coast will experience
            late to normal cessation. At the end of these forecasts,
            recommendations are made to the various stakeholders to help manage
            risks and take advantage of the benefits of the season.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeasonalForecast;
