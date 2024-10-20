import { useState } from "react";
import { districtOfGhana } from "../districts";

// Base poultry production activities for layers and broilers
const basePoultryActivities = {
  layers: [
    {
      activity: "Brooding",
      start: 1,
      end: 4,
      color: "bg-yellow-300",
      advisory:
        "Ensure the brooding temperature is maintained at optimal levels.",
    },
    {
      activity: "Feeding",
      start: 1,
      end: 20,
      color: "bg-blue-300",
      advisory: "Provide balanced feed to promote growth and health.",
    },
    {
      activity: "Vaccination",
      start: 12,
      end: 12,
      color: "bg-red-300",
      advisory: "Vaccinate to prevent common poultry diseases.",
    },
    {
      activity: "Egg Collection",
      start: 16,
      end: 20,
      color: "bg-green-300",
      advisory: "Collect eggs twice daily to avoid breakage and contamination.",
    },
    {
      activity: "Feeding & Watering",
      start: 5,
      end: 20,
      color: "bg-blue-200",
      advisory: "Ensure water supply is clean and uninterrupted.",
    },
    {
      activity: "Health Monitoring",
      start: 1,
      end: 20,
      color: "bg-purple-300",
      advisory: "Regularly check for signs of disease and stress.",
    },
  ],
  broilers: [
    {
      activity: "Brooding",
      start: 1,
      end: 4,
      color: "bg-yellow-300",
      advisory: "Keep the brooding area warm and dry.",
    },
    {
      activity: "Feeding",
      start: 1,
      end: 4,
      color: "bg-blue-300",
      advisory: "Provide high-quality starter feed.",
    },
    {
      activity: "Vaccination",
      start: 1,
      end: 3,
      color: "bg-red-300",
      advisory: "Vaccination is essential for broiler health.",
    },
    {
      activity: "Feeding & Watering",
      start: 5,
      end: 8,
      color: "bg-blue-200",
      advisory: "Ensure access to clean water and sufficient feed.",
    },
    {
      activity: "Health Monitoring",
      start: 1,
      end: 8,
      color: "bg-purple-300",
      advisory: "Monitor weight gain and check for illness.",
    },
    {
      activity: "Slaughtering",
      start: 8,
      end: 8,
      color: "bg-red-200",
      advisory: "Ensure humane and hygienic slaughtering practices.",
    },
  ],
};

// Regions of Ghana
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
  "Bono",
  "Western North",
  "Ahafo",
  "Savannah",
  "Oti",
  "Bono East",
  "North East",
];

// Function to generate region-specific poultry activity times based on climate
const generateRegionPoultryActivities = () => {
  const regions = {};

  // Example climate offset data
  const climateOffsets = {
    "Greater Accra": 0, // No offset
    Ashanti: 1, // Starts 1 week later
    Northern: 2, // Starts 2 weeks later
    Eastern: -1, // Starts 1 week earlier
    Western: 3, // Starts 3 weeks later
    Volta: 1, // Slightly later
    "Upper East": 2, // Late planting
    "Upper West": 2, // Late planting
    Central: 1, // Neutral
    Bono: 3, // Neutral
    "Western North": 1, // Slightly earlier
    Ahafo: 1, // Slightly earlier
    Savannah: 2, // Late planting
    Oti: 1, // Neutral
    "Bono East": -2, // Neutral
    "North East": 2, // Late planting
  };

  // Helper function to adjust the week based on climate offset
  const adjustWeek = (week, offset) => {
    let newWeek = week + offset;
    if (newWeek < 1) newWeek += 22; // Wrap around the year if it goes negative
    if (newWeek > 22) newWeek -= 22; // Wrap around if it exceeds 52 weeks
    return newWeek;
  };

  // Generate activities for each region and poultry type
  regionsOfGhana.forEach((region) => {
    const offset = climateOffsets[region] || 0; // Default to 0 if no specific offset
    regions[region] = {
      layers: basePoultryActivities.layers.map((activity) => ({
        ...activity,
        start: adjustWeek(activity.start, offset),
        end: adjustWeek(activity.end, offset),
      })),
      broilers: basePoultryActivities.broilers.map((activity) => ({
        ...activity,
        start: adjustWeek(activity.start, offset),
        end: adjustWeek(activity.end, offset),
      })),
    };
  });

  return regions;
};

// Declare poultry production calendars for each region
const poultryCalendars = generateRegionPoultryActivities();

const PoultryCalendar = () => {
  const [selectedPoultry, setSelectedPoultry] = useState("layers");
  const [selectedRegion, setSelectedRegion] = useState("Greater Accra");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [hoveredAdvisory, setHoveredAdvisory] = useState(null); // For displaying advisories
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const poultryActivities =
    poultryCalendars[selectedRegion][selectedPoultry] || [];

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handlePoultryChange = (event) => {
    setSelectedPoultry(event.target.value);
    setSelectedRegion("Greater Accra"); // Reset to the first region on poultry type change
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleMouseEnter = (advisory, event) => {
    setHoveredAdvisory(advisory);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredAdvisory(null);
  };

  // Function to handle downloading the poultry calendar
  const handleDownload = () => {
    const headers = [
      "Activity",
      ...Array.from({ length: 20 }, (_, i) => `Week ${i + 1}`),
    ];
    const csvRows = [headers.join(",")];

    poultryActivities.forEach((activity) => {
      const row = [
        activity.activity,
        ...Array.from({ length: 20 }, (_, i) => {
          const week = i + 1;
          return week >= activity.start && week <= activity.end ? "✔️" : "";
        }),
      ];
      csvRows.push(row.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "poultry_calendar.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle sharing the poultry calendar
  const handleShare = () => {
    const shareData = {
      title: "Ghana Poultry Calendar",
      text: `Check out the poultry production calendar for ${selectedPoultry} in the ${selectedRegion} region!`,
      url: window.location.href, // Optionally include the current URL
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share feature is not supported in this browser.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8 pt-24 relative">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* <div className="flex justify-between align-middle items-center my-6 mb-10">
          <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
            Poultry Production Calendar
          </h1>
          <div className="flex align-middle items-center gap-6">
            <button
              onClick={handleDownload}
              className="p-2 px-4 bg-green-500 text-white rounded-full"
            >
              Download
            </button>
            <button
              onClick={handleShare}
              className="p-2 px-4 bg-blue-500 text-white rounded-full"
            >
              Share
            </button>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-6 mb-10">
          <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
            Poultry Production Calendar
          </h1>
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
            <button
              onClick={handleDownload}
              className="p-3 px-4 w-full md:w-auto bg-green-500 text-white rounded-full text-center"
            >
              Download
            </button>
            <button
              onClick={handleShare}
              className="p-3 px-4 w-full md:w-auto bg-blue-500 text-white rounded-full text-center"
            >
              Share
            </button>
          </div>
        </div>
        {/* Dropdown for Poultry and Region Selection - Same Row */}
        <div className="flex flex-col md:flex-row mb-4 justify-between my-10">
          {/* Dropdown for Poultry Type Selection */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2">
              Select Poultry Type:
            </label>
            <select
              value={selectedPoultry}
              onChange={handlePoultryChange}
              className="border border-gray-300 rounded p-2 w-2/3"
            >
              {/* <option value="all">All Poultry</option> */}
              <option value="layers">Layers</option>
              <option value="broilers">Broilers</option>
            </select>
          </div>

          {/* Dropdown for Region Selection */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2">Select Region:</label>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="border border-gray-300 rounded p-2 w-2/3"
            >
              {regionsOfGhana.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for District Selection */}
          <div className="w-full md:w-1/3">
            <label className="text-lg font-semibold mr-2">
              Select District:
            </label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="border border-gray-300 rounded p-2 w-2/3"
            >
              {districtOfGhana
                .filter((d) => d.region === selectedRegion)
                .map((district, index) => (
                  <option key={index} value={district.name}>
                    {district.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Calendar Table (Weeks) */}
        <div className="overflow-auto">
          <table className="min-w-full border-collapse border border-gray-300 table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left">
                  Activity
                </th>
                {Array.from({ length: 20 }, (_, i) => (
                  <th key={i} className="border border-gray-300 p-2 text-left">
                    Week {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {poultryActivities.map((activity, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">
                    {activity.activity}
                  </td>
                  {Array.from({ length: 20 }, (_, i) => {
                    const week = i + 1;
                    const isActive =
                      week >= activity.start && week <= activity.end;
                    return (
                      <td
                        key={i}
                        className={`border border-gray-300 p-2 ${
                          isActive ? activity.color : ""
                        }`}
                        onMouseEnter={(event) =>
                          handleMouseEnter(activity.advisory, event)
                        }
                        onMouseLeave={handleMouseLeave}
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tooltip for advisory */}
        {hoveredAdvisory && (
          <div
            className="absolute bg-gray-800 text-white text-sm p-2 rounded"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y + 10,
            }}
          >
            {hoveredAdvisory}
          </div>
        )}
      </div>
    </div>
  );
};

export default PoultryCalendar;
