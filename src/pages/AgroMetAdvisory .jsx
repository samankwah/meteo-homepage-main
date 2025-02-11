import { useState } from "react";
import prismaImage from "../assets/images/prisma.png";
import { districtOfGhana } from "../districts";

const AgroMetAdvisory = () => {
  // Sample data for filters
  const filterData = {
    crop: ["Maize", "Rice", "Sorghum", "Soyabean", "Tomato"],
    region: [
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
    // district: ["Nkwanta South", "Kadjebi", "Krachi East", "Nkwanta North"],
    variety: ["Hybrid Maize - A123", "Local Maize", "Improved Maize"],
    month: [
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
    year: ["2024", "2025"],
    week: [
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
    crop: "",
    region: "",
    district: "",
    variety: "",
    month: "",
    year: "",
    week: "",
  });
  const [showAdvisory, setShowAdvisory] = useState(false);

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
      "This week's weather outlook for maize farmers in the Nkwanta South district of the Oti region indicates favorable conditions for crop establishment and early growth. Rainfall is expected to be moderate, sufficient for planting activities, while temperatures will support optimal germination and development. However, the high humidity levels may promote fungal diseases; preventive measures such as fungicide application are advised. Farmers should also monitor soil moisture closely to ensure it remains conducive to plant growth. Overall, conditions are suitable for maize farming, with minimal risks from adverse weather.",
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

  const handleViewAdvisories = () => {
    // console.log("Viewing advisories for:", selected);
    // Add your view advisories logic here
    setShowAdvisory(true);
  };

  return (
    <div className="container mx-auto p-2 md:p-4 shadow-lg rounded-lg mt-16 md:mt-20">
      {/* Header Section with View Advisories Button */}
      <div className="relative text-center mb-4 md:mb-6 bg-gray-100 py-2 md:py-4 rounded-t-lg">
        <h1 className="text-lg md:text-xl font-bold uppercase mb-1 md:mb-2 text-gray-800">
          West Africa Food System Resilience Programme
        </h1>
        <h2 className="text-sm md:text-lg font-semibold uppercase text-gray-700">
          Agro-Meteorological Forecasts and Advisories
        </h2>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto p-2 md:p-4 shadow-lg rounded-lg mt-6 md:mt-10">
        {/* Filters Section with View Advisories Button */}
        <div className="mb-4 md:mb-6 p-2 md:p-4 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {Object.entries(filterData).map(([key, values]) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium mb-1 capitalize">
                  {key.replace("_", " ")}
                </label>
                <select
                  value={selected[key.toLowerCase()]}
                  onChange={(e) => handleFilterChange(e, key.toLowerCase())}
                  className="p-2 border border-gray-300 rounded"
                >
                  <option value="">
                    Select {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                  {values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            {/* <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                District
              </label>
              <select
               
                className="p-2 border border-gray-300 rounded"
              >
                {districtOfGhana
                  .filter(
                    (d) =>
                      d.region.toLowerCase() ===
                      selected.region.toLocaleLowerCase()
                  )
                  .map((value) => (
                    <option key={value.name} value={value.name}>
                      {value.name}
                    </option>
                  ))}
              </select>
            </div> */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                District
              </label>
              <select
                value={selected.district}
                onChange={(e) => handleFilterChange(e, "district")}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Select District</option>
                {districtOfGhana
                  .filter(
                    (d) =>
                      d.region.toLowerCase() === selected.region.toLowerCase() // Case-insensitive match
                  )
                  .map((district) => (
                    <option key={district.name} value={district.name}>
                      {district.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-3 md:mt-4">
            <button
              onClick={handleViewAdvisories}
              className="bg-green-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 text-xs md:text-sm font-semibold shadow-sm"
            >
              View Advisories
            </button>
          </div>
        </div>
      </div>

      {showAdvisory ? (
        <>
          {" "}
          {/* Info Display Table */}
          <div className="4 md:mb-6 overflow-x-auto">
            <table className="w-full border-collapse bg-white text-sm">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-100">
                    <strong>CROP</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {selected.crop}
                  </td>
                  <td className="border border-gray-300 p-2 bg-gray-100">
                    <strong>REGION</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {selected.region}
                  </td>
                  <td className="border border-gray-300 p-2 bg-gray-100">
                    <strong>MONTH/YEAR</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {selected.month} {selected.year}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-100">
                    <strong>VARIETY</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {selected.variety}
                  </td>
                  <td className="border border-gray-300 p-2 bg-gray-100">
                    <strong>DISTRICT</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {selected.district}
                  </td>
                  <td className="border border-gray-300 p-2 bg-gray-100">
                    <strong>WEEK</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {selected.week}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Weather Parameters Table */}
          <div className="md:mb-6 overflow-x-auto">
            <table className="min-w-max mx-auto border-collapse text-xs md:text-sm bg-white">
              <thead>
                <tr className="bg-gray-100">
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
                    <td className="border border-gray-300 p-1 md:p-2 bg-gray-100">
                      <strong>{type.toUpperCase()}</strong>
                    </td>
                    {parameters.map((_, index) => (
                      <td
                        key={index}
                        className="border border-gray-300 p-1 text-center min-w-[120px]"
                      >
                        <input
                          type="text"
                          placeholder="Enter data..."
                          value={data[type][index]}
                          onChange={(e) =>
                            handleInputChange(type, index, e.target.value)
                          }
                          className="w-full text-xs md:text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Summary Section */}
          <div className="mt-4 md:mt-6">
            <p className="text-center text-sm md:text-base font-semibold px-2">
              SUMMARY WEATHER OUTLOOK & ADVISORY FOR{" "}
              <span className="block md:inline">
                {selected.crop.toUpperCase()}
              </span>{" "}
              FARMERS IN THE{" "}
              <span className="block md:inline">
                {selected.district.toUpperCase()}
              </span>{" "}
              DISTRICT OF THE{" "}
              <span className="block md:inline">{selected.region}</span> REGION
              FOR THE WEEK OF{" "}
              <span className="block md:inline">{selected.week}</span>{" "}
              <span className="block md:inline">
                {selected.month.toUpperCase()}. {selected.year}
              </span>
            </p>
            <textarea
              className="w-full mt-2 md:mt-4 p-8 md:p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              rows="4"
              placeholder="Enter summary here..."
              value={data.summary}
              onChange={handleSummaryChange}
            />
          </div>
          {/* Download Button */}
          <button
            onClick={downloadCSV}
            className="mt-3 md:mt-4 bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-blue-600 transition text-sm md:text-base"
          >
            Download as CSV
          </button>
        </>
      ) : null}
    </div>
  );
};

export default AgroMetAdvisory;
