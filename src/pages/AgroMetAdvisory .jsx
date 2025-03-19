import { useState, useMemo } from "react";
import prismaImage from "../assets/images/prisma.png";
import { districtOfGhana } from "../district";
import { FaEye, FaDownload, FaPaperPlane } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const AgroMetAdvisory = () => {
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
  const [smsSummary, setSmsSummary] = useState("");
  const [userPhoneNumber] = useState("0243999631");

  // const [data] = useState({
  //   summary:
  //     "This week's weather outlook for maize farmers in the Nkwanta South district of the Oti region indicates favorable conditions for crop establishment and early growth. Rainfall is expected to be moderate, sufficient for planting activities, while temperatures will support optimal germination and development. However, high humidity may promote fungal diseases; apply fungicides as a preventive measure. Monitor soil moisture closely.",
  //   advisoryTable: {
  //     parameters: [
  //       "RAINFALL",
  //       "TEMPERATURE",
  //       "EVAPO-TRANSPIRATION",
  //       "SOIL MOISTURE",
  //       "HUMIDITY",
  //       "SOIL TEMPERATURE",
  //       "DAY LENGTH",
  //       "WIND DXN",
  //       "WIND SPEED",
  //       "PRESSURE",
  //     ],
  //     forecast: [
  //       "50% Prob. of occurrence",
  //       "35°C (Day) / 24°C (Night)",
  //       "4 mm/day",
  //       "Moderate",
  //       "75%",
  //       "22°C",
  //       "12 hours",
  //       "North-East",
  //       "15 km/h",
  //       "1015 hPa",
  //     ],
  //     implication: [
  //       "Favorable for planting; avoid waterlogging.",
  //       "Optimal for germination and seedling growth.",
  //       "May increase water stress on plants.",
  //       "Good for root growth but risks drying out fast.",
  //       "Promotes disease spread like blight.",
  //       "Favors seed germination.",
  //       "Supports photosynthesis and plant growth.",
  //       "Low risk for wind damage.",
  //       "Minimal effects on crop canopy.",
  //       "Stable weather conditions.",
  //     ],
  //     advisory: [
  //       "Use well-drained plots.",
  //       "Begin sowing crops; monitor heat stress.",
  //       "Apply irrigation efficiently.",
  //       "Irrigate if dry spells last more than 2 days.",
  //       "Apply fungicide; ensure airflow in the field.",
  //       "Maintain soil cover (mulch).",
  //       "No special action required.",
  //       "Monitor for dry winds.",
  //       "Maintain crop support if required.",
  //       "Continue normal operations.",
  //     ],
  //   },
  // });
  const [data] = useState({
    advisoryTable: {
      parameters: [
        "RAINFALL",
        "TEMPERATURE",
        "EVAPO-TRANSPIRATION",
        "SOIL MOISTURE",
        "HUMIDITY",
        "SOIL TEMPERATURE",
        "DAY LENGTH",
        "WIND DXN",
        "WIND SPEED",
        "PRESSURE",
      ],
      forecast: [
        "50% Prob. of occurrence",
        "35°C (Day) / 24°C (Night)",
        "4 mm/day",
        "Moderate",
        "75%",
        "22°C",
        "12 hours",
        "North-East",
        "15 km/h",
        "1015 hPa",
      ],
      implication: [
        "Favorable for planting; avoid waterlogging.",
        "Optimal for germination and seedling growth.",
        "May increase water stress on plants.",
        "Good for root growth but risks drying out fast.",
        "Promotes disease spread like blight.",
        "Favors seed germination.",
        "Supports photosynthesis and plant growth.",
        "Low risk for wind damage.",
        "Minimal effects on crop canopy.",
        "Stable weather conditions.",
      ],
      advisory: [
        "Use well-drained plots.",
        "Begin sowing crops; monitor heat stress.",
        "Apply irrigation efficiently.",
        "Irrigate if dry spells last more than 2 days.",
        "Apply fungicide; ensure airflow in the field.",
        "Maintain soil cover (mulch).",
        "No special action required.",
        "Monitor for dry winds.",
        "Maintain crop support if required.",
        "Continue normal operations.",
      ],
    },
  });
  const handleFilterChange = (e, field) => {
    setSelected((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const generateSmsSummary = (summary) => {
    return summary.slice(0, 314) + (summary.length > 1000 ? "..." : "");
  };

  const sendSMS = () => {
    if (smsSummary) {
      console.log(`Sending SMS to ${userPhoneNumber}: ${smsSummary}`);
      alert(`SMS sent to ${userPhoneNumber}: ${smsSummary}`);
    } else {
      alert("No SMS summary available to send.");
    }
  };

  const summary = useMemo(() => {
    if (!selected.crop || !selected.district || !selected.region) {
      return "";
    }
    return `This week's weather outlook for ${selected.crop} farmers in the ${selected.district} district of the ${selected.region} region indicates favorable conditions for crop establishment and early growth. Rainfall is expected to be moderate, sufficient for planting activities, while temperatures will support optimal germination and development. However, high humidity may promote fungal diseases; apply fungicides as a preventive measure. Monitor soil moisture closely.`;
  }, [selected.crop, selected.district, selected.region]);

  const handleViewAdvisories = () => {
    if (!selected.crop || !selected.region || !selected.district) {
      alert("Please select crop, region, and district.");
      return;
    }
    setShowAdvisory(true);
    const sms = generateSmsSummary(summary);
    setSmsSummary(sms);
  };

  const downloadPDF = () => {
    const element = document.getElementById("pdf-content");
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `agro_advisory_${selected.region}_${selected.district}_${selected.month}_${selected.year}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div
      className="min-h-screen bg-gray-950 mx-auto px-4 py-2 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${prismaImage})`,
        backgroundSize: "1400px 1200px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize: "1200px 800px",
        MozBackgroundSize: "1200px 800px",
      }}
    >
      <div className="container mx-auto p-3 md:p-5 shadow-xl rounded-lg mt-14 md:mt-16 bg-white/90 backdrop-blur-md mb-16">
        <div className="relative text-center mb-5 bg-gradient-to-r from-green-500 to-blue-600 py-5 rounded-t-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold uppercase text-white">
            West Africa Food System Resilience Programme
          </h1>
          <h2 className="text-md md:text-xl font-semibold text-gray-100">
            Agro-Meteorological Forecasts and Advisories
          </h2>
        </div>

        <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg shadow-lg mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {Object.entries(filterData).map(([key, values]) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium mb-1 capitalize text-gray-800">
                  {key.replace("_", " ")}
                </label>
                <select
                  value={selected[key.toLowerCase()] || ""}
                  onChange={(e) => handleFilterChange(e, key.toLowerCase())}
                  className="p-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-green-500 transition-all duration-300"
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
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize text-gray-800">
                District
              </label>
              <select
                value={selected.district || ""}
                onChange={(e) => handleFilterChange(e, "district")}
                className="p-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-green-500 transition-all duration-300"
              >
                <option value="">Select District</option>
                {districtOfGhana
                  .filter(
                    (d) =>
                      d.region.toLowerCase() === selected.region.toLowerCase()
                  )
                  .map((district) => (
                    <option key={district.name} value={district.name}>
                      {district.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleViewAdvisories}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
            >
              <FaEye className="text-lg" />
              View Advisories
            </button>
          </div>
        </div>

        {showAdvisory && (
          <div id="pdf-content">
            <div className="mb-5 overflow-x-auto">
              <table className="min-w-max mx-auto border-collapse bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
                    <th className="border border-gray-200 p-2.5"></th>
                    {data.advisoryTable.parameters.map((param, index) => (
                      <th
                        key={index}
                        className="border border-gray-200 p-2.5 text-center"
                      >
                        {param}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["forecast", "implication", "advisory"].map((type) => (
                    <tr
                      key={type}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="border border-gray-200 p-3 bg-gray-100 font-semibold text-gray-800">
                        {type.toUpperCase()}
                      </td>
                      {data.advisoryTable[type].map((item, index) => (
                        <td
                          key={index}
                          className="border border-gray-200 p-3 text-left"
                        >
                          <p className="text-sm text-gray-800 whitespace-normal break-words leading-relaxed">
                            {item}
                          </p>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 p-4 bg-white rounded-lg shadow-lg border-2 border-gradient-to-br from-green-500 to-blue-600">
              <p className="text-center text-base md:text-lg font-semibold text-gray-800 mb-2">
                SUMMARY WEATHER OUTLOOK & ADVISORY FOR{" "}
                <span className="text-green-600">
                  {selected.crop.toUpperCase()}
                </span>{" "}
                FARMERS IN THE{" "}
                <span className="text-green-600">
                  {selected.district.toUpperCase()}
                </span>{" "}
                DISTRICT OF THE{" "}
                <span className="text-green-600">{selected.region}</span> REGION
                FOR THE WEEK OF{" "}
                <span className="text-green-600">{selected.week}</span>{" "}
                <span className="text-green-600">
                  {selected.month.toUpperCase()} {selected.year}
                </span>
              </p>
              <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                {summary}
              </p>
            </div>

            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">SMS</h3>
              <p className="text-sm text-gray-700 mb-4 bg-white p-2 rounded border">
                {smsSummary}
              </p>
              <button
                onClick={sendSMS}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md"
              >
                <FaPaperPlane className="text-lg" />
                Send SMS
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={downloadPDF}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md"
              >
                <FaDownload className="text-lg" />
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgroMetAdvisory;
