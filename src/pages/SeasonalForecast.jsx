import React from "react";

const SeasonalForecast = () => {
  return (
    <div className="container mx-auto p-6 bg-teal-900 text-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">East Coast (MAM & AMJ)</h1>
        <p className="text-xl text-yellow-400">
          NORMAL ONSET AND EARLY CESSATION
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Section */}
        <div className="bg-white text-black rounded-lg p-4">
          <img
            src="/path-to-your-map-image" // Update with correct path
            alt="Map"
            className="w-full h-auto mb-4"
          />
        </div>

        {/* LTM and Forecast Table */}
        <div className="bg-white text-black rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-2 bg-gray-200">START</th>
                <th className="p-2 bg-gray-200">END</th>
                <th className="p-2 bg-gray-200">LENGTH OF SEASON (Days)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-center">
                  1st Week of March - 3rd Week of April
                </td>
                <td className="p-2 text-center">
                  1st Week of July - 3rd Week of July
                </td>
                <td className="p-2 text-center">91-112</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 text-center">2024 Forecast</td>
                <td className="p-2 text-center">2024 Forecast</td>
                <td className="p-2 text-center">121-147</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cumulative Rainfall */}
        <div className="bg-white text-black rounded-lg p-6">
          <h3 className="text-xl font-bold text-teal-900 mb-4">
            Cumulative Rainfall
          </h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-2 bg-gray-200">PERIOD</th>
                <th className="p-2 bg-gray-200">LTM (mm)</th>
                <th className="p-2 bg-gray-200">2024 (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-center">MAM</td>
                <td className="p-2 text-center">217-420</td>
                <td className="p-2 text-center">283-430</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 text-center">AMJ</td>
                <td className="p-2 text-center">391-478</td>
                <td className="p-2 text-center">346-580</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4 className="font-bold text-red-600">Advisories:</h4>
            <ul className="list-disc ml-5">
              <li>Harvest rainwater and store for irrigation.</li>
              <li>Cultivate early short cycle crops.</li>
              <li>Contact agricultural experts for information.</li>
            </ul>
          </div>
        </div>

        {/* Dry Spells */}
        <div className="bg-white text-black rounded-lg p-6">
          <h3 className="text-xl font-bold text-teal-900 mb-4">Dry Spells</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-2 bg-gray-200">PERIOD</th>
                <th className="p-2 bg-gray-200">LTM (Days)</th>
                <th className="p-2 bg-gray-200">2024 (Days)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-center">EARLY (1st)</td>
                <td className="p-2 text-center">9</td>
                <td className="p-2 text-center">10</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 text-center">LATE (2nd)</td>
                <td className="p-2 text-center">13</td>
                <td className="p-2 text-center">14-18</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4 className="font-bold text-red-600">Advisories:</h4>
            <ul className="list-disc ml-5">
              <li>Plant cover crops or leguminous crops.</li>
              <li>Adopt mulching practices.</li>
              <li>Plant drought-resistant varieties of crops.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer: Long-term Mean Explanation */}
      <div className="mt-8 text-center text-sm">
        <p>
          <span className="font-bold">Long term mean (LTM)</span> is the 30-year
          average condition of a given Zone from 1991-2020.
        </p>
      </div>
    </div>
  );
};

export default SeasonalForecast;
