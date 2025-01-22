import { useState } from "react";
import { districtOfGhana } from "../districts";

// Base poultry production activities for layers and broilers
const basePoultryActivities = {
  layers: [
    {
      activity: "Site selection/Construction of appropriate housing",
      start: 1,
      end: 1,
      color: "bg-[#00B0F0]",
      advisory:
        "Choose a well-drained, accessible location \naway from potential contaminants. \nEnsure adequate shelter and ventilation.\nAvoid areas prone to flooding and \nthose near other livestock to minimize disease risks.",
    },
    {
      activity: "Preparation of day-old chicks",
      start: 1,
      end: 1,
      color: "bg-[#375623]",
      advisory:
        "Prepare the brooding area to be warm and draft-free.\nProvide clean bedding, accessible feeders and drinkers, \nand monitor the chicks closely during the first 24 hours for any signs of distress or illness.",
    },
    {
      activity: "Brooder management",
      start: 1,
      end: 3,
      color: "bg-[#000000]",
      advisory:
        "Ensure the brooding temperature is maintained at optimal levels \nbetween 90-95°F (32-35°C) for the first week, reducing gradually.\nCheck temperature, ventilation, and humidity regularly, and adjust based on chick behavior (e.g., huddling indicates cold).",
    },
    {
      activity: "Feeding and Water for Starters",
      start: 1,
      end: 7,
      color: "bg-[#FFFF00]",
      advisory:
        "Provide a balanced starter feed with the necessary protein, vitamins, and minerals to support growth.\nEnsure fresh, clean water is always available.\nMonitor feed intake daily to assess chick health and development.",
    },
    {
      activity: "Vaccination (Gumboro, Newcastle)",
      start: 1,
      end: 4,
      color: "bg-[#FF0000]",
      advisory:
        "Administer vaccinations at the correct times and doses to protect against Gumboro and Newcastle diseases.\nFollow vaccine storage and handling guidelines to ensure efficacy, and minimize stress during the vaccination process.",
    },
    {
      activity: "Feeding and Water for Growers",
      start: 8,
      end: 15,
      color: "bg-[#FFFF00]",
      advisory:
        "Transition to a grower feed with lower protein content than starter feed but balanced for continued growth.\nEnsure the water supply is clean, uninterrupted, and regularly check the condition and cleanliness of drinkers.",
    },
    {
      activity: "Deworming",
      start: 7,
      end: 7,
      color: "bg-[#0070C0]",
      advisory:
        "Administer a suitable deworming treatment to control intestinal parasites, which can impact growth and health.\nObserve withdrawal times as per product instructions, and monitor birds for signs of parasitic infections.",
    },
    {
      activity: "Fowl pox vaccination",
      start: 8,
      end: 12,
      color: "bg-[#FF0000]",
      advisory:
        "Vaccinate against fowl pox using the \nrecommended method (usually wing web).\nEnsure proper handling and disposal of the vaccine, \nand monitor birds for any adverse reactions post-vaccination.",
    },
    {
      activity: "Feed (Layer mash)",
      start: 16,
      end: 20,
      color: "bg-[#FFFF00]",
      advisory:
        "Switch to a layer feed with sufficient calcium, \nphosphorus, and other nutrients \nessential for egg production.\nMaintain fresh water access, and inspect \nbirds for signs of malnutrition or dietary imbalance.",
    },
    {
      activity: "Egg Collection",
      start: 16,
      end: 20,
      color: "bg-gray-300",
      advisory:
        "Collect eggs at least twice daily to prevent \nbreakage and contamination.\nHandle eggs carefully to \navoid cracks, and store them in a clean, cool \nplace until they are ready for sale or consumption.",
    },
    {
      activity: "Coccidiosis prevention",
      start: 1,
      end: 20,
      color: "bg-[#C6E0B4]",
      advisory:
        "Implement regular cleaning of drinkers \nand feeders, maintain dry bedding, and use \nmedicated feed if necessary.\nWatch for symptoms such as diarrhea, lethargy, \nand weight loss, and respond \npromptly to any outbreaks.",
    },
    {
      activity: "Biosecurity measures",
      start: 1,
      end: 20,
      color: "bg-[#1F497D]",
      advisory:
        "Restrict visitor access to the poultry \narea, sanitize equipment regularly, and \nenforce clothing changes and handwashing for all personnel.\nMonitor birds daily for signs of \ndisease or unusual behavior, and \nisolate sick birds immediately.",
    },
  ],
  broilers: [
    {
      activity: "Construction of appropriate housing",
      start: 1,
      end: 1,
      color: "bg-[#00B0F0]",
      advisory:
        "Select a well-drained location away from contaminants.\nConstruct housing to provide shelter and ventilation.",
    },
    {
      activity: "Arrival of day-old chicks",
      start: 1,
      end: 1,
      color: "bg-[#375623]",
      advisory:
        "Prepare the brooding area and ensure it is warm and clean\nbefore chicks arrive.",
    },
    {
      activity: "Brooder management",
      start: 1,
      end: 4,
      color: "bg-[#000000]",
      advisory:
        "Maintain a warm, controlled environment with proper ventilation\nand lighting.\nCheck temperature regularly to avoid chick huddling or overheating.",
    },
    {
      activity: "Feed (Starter Diet) ",
      start: 1,
      end: 4,
      color: "bg-[#FFFF00]",
      advisory:
        "Provide high-quality starter feed and ensure access to clean water.\nMonitor feed intake to assess early growth and health.",
    },
    {
      activity: "1st Gumboro vaccine ",
      start: 1,
      end: 1,
      color: "bg-[#FF0000]",
      advisory:
        "Administer the 1st Gumboro vaccine if day-old chicks have low maternal antibodies.\nPipe-borne water must be dechlorinated before use.",
    },
    {
      activity: "1st Newcastle HB1 (Hitchner)",
      start: 2,
      end: 2,
      color: "bg-[#FF0000]",
      advisory:
        "Administer Newcastle HB1 vaccine through water.\nEnsure water is dechlorinated before use.",
    },
    {
      activity: "2nd Gumboro vaccine",
      start: 3,
      end: 3,
      color: "bg-[#FF0000]",
      advisory:
        "Administer the 2nd Gumboro vaccine through water.\nEnsure water is dechlorinated before use.",
    },
    {
      activity: "Feed (Grower Diet) ",
      start: 5,
      end: 8,
      color: "bg-[#FFFF00]",
      advisory:
        "Transition to grower feed to support continued growth.\nEnsure constant access to clean water and monitor intake.",
    },
    {
      activity: "2nd Newcastle (Lasota) ",
      start: 6,
      end: 6,
      color: "bg-[#FF0000]",
      advisory:
        "Administer the 2nd Newcastle (Lasota) vaccine through clean, dechlorinated water.",
    },
    {
      activity: "Coccidiosis prevention",
      start: 1,
      end: 5,
      color: "bg-[#C6E0B4]",
      advisory:
        "Administer coccidiostat in water continuously for 3 days a week, from week 1 to week 5.\nProvide clean water for 2 days after medication before any vaccination.",
    },
    {
      activity: "Biosecurity measures",
      start: 1,
      end: 8,
      color: "bg-[#1F497D]",
      advisory:
        "Observe strict biosecurity measures.\nLimit access to housing, sanitize equipment regularly,\nand monitor birds daily.",
    },
    {
      activity: "Harvesting/live bird market",
      start: 8,
      end: 8,
      color: "bg-[#00B050]",
      advisory:
        "Prepare for humane and hygienic harvesting and transport to live bird market.",
    },
    {
      activity: "Processing",
      start: 8,
      end: 8,
      color: "bg-[#993366]",
      advisory:
        "Process birds in a hygienic facility to ensure food safety and quality.",
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
    Northern: 4, // Starts 2 weeks later
    Eastern: 1, // Starts 1 week earlier
    Western: 3, // Starts 3 weeks later
    Volta: 1, // Slightly later
    "Upper East": 4, // Late planting
    "Upper West": 3, // Late planting
    Central: 2, // Neutral
    Bono: 3, // Neutral
    "Western North": 1, // Slightly earlier
    Ahafo: 1, // Slightly earlier
    Savannah: 3, // Late planting
    Oti: 2, // Neutral
    "Bono East": 1, // Neutral
    "North East": 4, // Late planting
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
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8 pt-24">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center my-6 mb-10">
          <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
            Poultry Calendar for Major Season
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={handleDownload}
              className="p-2 px-4 w-full md:w-auto bg-green-500 text-white rounded-full text-center"
            >
              Download
            </button>
            <button
              onClick={handleShare}
              className="p-2 px-4 w-full md:w-auto bg-blue-500 text-white rounded-full text-center"
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
        <div className="overflow-x-auto">
          <table className="min-w-max border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left">
                  Stage of Activity
                </th>
                {Array.from({ length: 20 }, (_, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 px-6 text-nowrap"
                  >
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
            className="absolute bg-gray-800 w-[220px] text-white text-sm p-2 rounded"
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
