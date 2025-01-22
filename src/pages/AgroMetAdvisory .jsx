import { useState } from "react";
import { districtOfGhana } from "../districts";

const AgroMetAdvisory = () => {
  // Sample data for filters
  const filterData = {
    crops: ["Maize", "Rice", "Sorghum", "Soyabean", "Tomato"],
    regions: [
      "OTI",
      "VOLTA",
      "NORTHERN",
      "ASHANTI",
      "WESTERN",
      "WESTERN NORTH",
      "GREATER ACCRA",
      "EASTERN",
      "UPPER WEST",
      "UPPER EAST",
      "NORTH EAST",
      "SAVANNAH",
      "AHAFO",
      "BONO",
      "BONO EAST",
      "CENTRAL",
    ],
    districts: ["Nkwanta South", "Kadjebi", "Krachi East", "Nkwanta North"],
    varieties: ["Hybrid Maize - A123", "Local Maize", "Improved Maize"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    years: ["2024", "2025"],
    weeks: [
      "1st – 7th",
      "8th – 14th",
      "15th – 21st",
      "22nd – 28th",
      "29th – 31st",
    ],
  };

  const parameters = [
    "RAINFALL",
    "TEMPERATURE",
    "HUMIDITY",
    "SOIL MOISTURE",
    "SOIL TEMPERATURE",
    "DAY LENGTH",
    "EVAPO-TRANSPIRATION",
    "WIND DXN",
    "WIND SPEED",
    "PRESSURE",
  ];

  // State for filters
  const [selected, setSelected] = useState({
    crop: "Maize",
    region: "OTI",
    district: "Nkwanta South",
    variety: "Hybrid Maize - A123",
    month: "December",
    year: "2024",
    week: "1st – 7th",
  });

  // State for advisory data
  const [data, setData] = useState({
    forecast: [
      "50 mm",
      "28°C (Day) / 18°C (Night)",
      "75%",
      "Moderate",
      "22°C",
      "12 hours",
      "4 mm/day",
      "North-East",
      "15 km/h",
      "1015 hPa",
    ],
    implication: [
      "Favorable for planting; avoid waterlogging.",
      "Optimal for germination and seedling growth.",
      "Promotes disease spread like blight.",
      "Good for root growth but risks drying out fast.",
      "Favors seed germination.",
      "Supports photosynthesis and plant growth.",
      "May increase water stress on plants.",
      "Low risk for wind damage.",
      "Minimal effects on crop canopy.",
      "Stable weather conditions.",
    ],
    advisory: [
      "Use well-drained plots.",
      "Begin sowing crops; monitor heat stress.",
      "Apply fungicide; ensure airflow in the field.",
      "Irrigate if dry spells last more than 2 days.",
      "Maintain soil cover (mulch).",
      "No special action required.",
      "Apply irrigation efficiently.",
      "Monitor for dry winds.",
      "Maintain crop support if required.",
      "Continue normal operations.",
    ],
    summary:
      "This week’s weather outlook for maize farmers in the Nkwanta South district of the Oti region indicates favorable conditions for crop establishment and early growth. Rainfall is expected to be moderate, sufficient for planting activities, while temperatures will support optimal germination and development. However, the high humidity levels may promote fungal diseases; preventive measures such as fungicide application are advised. Farmers should also monitor soil moisture closely to ensure it remains conducive to plant growth. Overall, conditions are suitable for maize farming, with minimal risks from adverse weather.",
  });

  const handleFilterChange = (e, field) => {
    setSelected((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleInputChange = (type, index, value) => {
    setData((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleSummaryChange = (e) => {
    setData((prev) => ({
      ...prev,
      summary: e.target.value,
    }));
  };

  const downloadCSV = () => {
    const rows = [
      ["", ...parameters],
      ["FORECAST", ...data.forecast],
      ["IMPLICATION", ...data.implication],
      ["ADVISORY", ...data.advisory],
      ["SUMMARY", data.summary],
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.join(",")).join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "agro_advisory.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-20">
      {/* Header Section */}
      <div className="text-center mb-6 bg-gray-50 py-4 rounded-t-lg">
        <h1 className="text-xl font-bold uppercase mb-2 text-gray-800">
          West Africa Food System Resilience Programme
        </h1>
        <h2 className="text-lg font-semibold uppercase text-gray-700">
          Agro-Meteorological Forecasts and Advisories
        </h2>
      </div>

      {/* Filters Section */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(filterData).map(([key, values]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                {key.replace("_", " ")}
              </label>
              <select
                value={selected[key.toLowerCase()]}
                onChange={(e) => handleFilterChange(e, key.toLowerCase())}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Info Display Table */}
      <div className="mb-6">
        <table className="w-full border-collapse bg-white">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 bg-gray-50">
                <strong>CROP</strong>
              </td>
              <td className="border border-gray-300 p-2">{selected.crop}</td>
              <td className="border border-gray-300 p-2 bg-gray-50">
                <strong>REGION</strong>
              </td>
              <td className="border border-gray-300 p-2">{selected.region}</td>
              <td className="border border-gray-300 p-2 bg-gray-50">
                <strong>MONTH/YEAR</strong>
              </td>
              <td className="border border-gray-300 p-2">
                {selected.month} {selected.year}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 bg-gray-50">
                <strong>VARIETY</strong>
              </td>
              <td className="border border-gray-300 p-2">{selected.variety}</td>
              <td className="border border-gray-300 p-2 bg-gray-50">
                <strong>DISTRICT</strong>
              </td>
              <td className="border border-gray-300 p-2">
                {selected.district}
              </td>
              <td className="border border-gray-300 p-2 bg-gray-50">
                <strong>WEEK</strong>
              </td>
              <td className="border border-gray-300 p-2">{selected.week}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Weather Parameters Table */}
      <div className="mb-6">
        <table className="w-full border-collapse text-sm bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-2"></th>
              {parameters.map((param, index) => (
                <th key={index} className="border border-gray-300 p-2">
                  {param}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["forecast", "implication", "advisory"].map((type) => (
              <tr key={type}>
                <td className="border border-gray-300 p-2 bg-gray-50">
                  <strong>{type.toUpperCase()}</strong>
                </td>
                {parameters.map((_, index) => (
                  <td
                    key={index}
                    className="border border-gray-300 p-1 text-center"
                  >
                    <input
                      type="text"
                      placeholder="Enter data..."
                      value={data[type][index]}
                      onChange={(e) =>
                        handleInputChange(type, index, e.target.value)
                      }
                      className="w-full border-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <p className="text-center font-semibold">
          SUMMARY WEATHER OUTLOOK & ADVISORY FOR {selected.crop.toUpperCase()}{" "}
          FARMERS IN THE {selected.district.toUpperCase()} DISTRICT OF THE{" "}
          {selected.region} REGION FOR THE WEEK OF {selected.week}{" "}
          {selected.month.toUpperCase()}. {selected.year}
        </p>
        <textarea
          className="w-full mt-4 p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="5"
          placeholder="Enter summary here..."
          value={data.summary}
          onChange={handleSummaryChange}
        />
      </div>

      {/* Download Button */}
      <button
        onClick={downloadCSV}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Download as CSV
      </button>
    </div>
  );
};

export default AgroMetAdvisory;
