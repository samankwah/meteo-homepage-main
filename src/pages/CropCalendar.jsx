import { useState, useEffect } from "react";
import { districtOfGhana } from "../districts"; // Ensure you have this file containing the district data

// Base farming activities (common activities for all regions)
const baseActivities = [
  {
    activity: "Land Preparation",
    start: "January",
    end: "February",
    color: "bg-green-300",
  },
  {
    activity: "Seed Selection",
    start: "January",
    end: "February",
    color: "bg-green-300",
  },
  {
    activity: "Planting",
    start: "March",
    end: "March",
    color: "bg-yellow-300",
  },
  {
    activity: "Fertilizing",
    start: "April",
    end: "April",
    color: "bg-blue-300",
  },
  { activity: "Weeding", start: "April", end: "May", color: "bg-orange-300" },
  { activity: "Pest Control", start: "May", end: "June", color: "bg-red-300" },
  {
    activity: "Harvesting",
    start: "July",
    end: "July",
    color: "bg-purple-300",
  },
  {
    activity: "Irrigation",
    start: "August",
    end: "September",
    color: "bg-teal-300",
  },
  {
    activity: "Weeding",
    start: "September",
    end: "September",
    color: "bg-orange-300",
  },
  {
    activity: "Fertilizing",
    start: "October",
    end: "October",
    color: "bg-blue-300",
  },
  {
    activity: "Pest Monitoring",
    start: "November",
    end: "November",
    color: "bg-red-300",
  },
  {
    activity: "Crop Maintenance",
    start: "November",
    end: "December",
    color: "bg-purple-300",
  },
  {
    activity: "Preparing for Next Season",
    start: "December",
    end: "December",
    color: "bg-gray-300",
  },
];

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

// Function to generate region-specific activity times based on climate (offsetting activity months)
const generateRegionActivities = () => {
  const regions = {};

  // Example climate offset data (simulating climate differences)
  const climateOffsets = {
    "Greater Accra": 0, // Minimal offset
    Ashanti: 1, // Slightly earlier
    Northern: 2, // Later planting and harvesting
    Eastern: 1, // Slightly earlier
    Western: 1, // Varied seasons
    Volta: 1, // Slightly later
    "Upper East": 2, // Late planting
    "Upper West": 2, // Late planting
    Central: 0, // Neutral
    Bono: 0, // Neutral
    "Western North": 1, // Slightly earlier
    Ahafo: 1, // Slightly earlier
    Savannah: 2, // Late planting
    Oti: 0, // Neutral
    "Bono East": 0, // Neutral
    "North East": 2, // Late planting
  };

  // Array of months
  const months = [
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
  ];

  // Helper function to adjust the month based on climate offset
  const adjustMonth = (month, offset) => {
    const index = months.indexOf(month);
    return months[(index + offset + 12) % 12]; // Ensure it wraps around the year correctly
  };

  // Generate activities for each region based on the climate offset
  regionsOfGhana.forEach((region) => {
    const offset = climateOffsets[region] || 0; // Default to 0 if no specific offset
    regions[region] = baseActivities.map((activity) => ({
      ...activity,
      start: adjustMonth(activity.start, offset),
      end: adjustMonth(activity.end, offset),
    }));
  });

  return regions;
};

// Declare region calendars once
const regionCalendars = generateRegionActivities();

const CropCalendar = () => {
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [farmingActivities, setFarmingActivities] = useState([]); // Default state for activities
  const [loading, setLoading] = useState(false); // Loading state for filtering
  const [initialLoad, setInitialLoad] = useState(true); // Track if initial load

  useEffect(() => {
    // Update activities based on selections
    const updateFarmingActivities = () => {
      setLoading(true); // Set loading state

      let activities = [];

      // Default to showing a sample of the crop calendar on initial load
      if (initialLoad) {
        activities = baseActivities; // Show base activities initially
        setInitialLoad(true); // Set initial load to false after first render
      } else if (
        selectedRegion === "All Regions" ||
        selectedDistrict === "All Districts"
      ) {
        activities = Object.values(regionCalendars).flat();
      } else {
        activities = regionCalendars[selectedRegion] || [];
      }

      setFarmingActivities(activities);
      setLoading(false); // Reset loading state
    };

    updateFarmingActivities();
  }, [selectedCrop, selectedRegion, selectedDistrict, initialLoad]);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedDistrict("All Districts"); // Reset district when changing region
  };

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
    setSelectedRegion("All Regions"); // Reset region on crop change
    setSelectedDistrict("All Districts"); // Reset district on crop change
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // Function to handle downloading the crop calendar
  const handleDownload = () => {
    // Correct header generation
    const headers = [
      "Activity",
      ...Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString("default", { month: "long" })
      ),
    ];
    const csvRows = [headers.join(",")];

    farmingActivities.forEach((activity) => {
      const row = [
        activity.activity,
        ...Array.from({ length: 12 }, (_, i) => {
          const month = new Date(0, i).toLocaleString("default", {
            month: "long",
          });
          return month >= activity.start && month <= activity.end ? "✔️" : "";
        }),
      ];
      csvRows.push(row.join(",")); // Push the formatted row into csvRows
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "crop_calendar.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle sharing the calendar
  const handleShare = async () => {
    const shareData = {
      title: "Crop Calendar",
      text: "Check out this crop calendar!",
      url: "https://your-website-url.com", // Update with your website URL
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Share successful!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between align-middle items-center my-6 mb-10">
          <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
            Crop Calendar for Major Season
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
        </div>

        {/* Dropdown for Crop and Region Selection */}
        <div className="flex flex-col md:flex-row mb-4 justify-between gap-4">
          {/* Dropdown for Crop Selection */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2 block">
              Select Crop:
            </label>

            <select
              value={selectedCrop}
              onChange={handleCropChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="all">All Crops</option>
              <option value="maize">Maize</option>
              <option value="soybean">Soybean</option>
              <option value="sorghum">Sorghum</option>
              <option value="rice">Rice</option>
            </select>
          </div>

          {/* Dropdown for Region Selection */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2 block">
              Select Region:
            </label>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="All Regions">All Regions</option>
              {regionsOfGhana.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for District Selection */}
          <div className="w-full md:w-1/3">
            <label className="text-lg font-semibold mr-2 block">
              Select District:
            </label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="All Districts">All Districts</option>
              {districtOfGhana
                .filter(
                  (d) =>
                    d.region === selectedRegion ||
                    selectedRegion === "All Regions"
                )
                .map((district, index) => (
                  <option key={index} value={district.name}>
                    {district.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Loading state */}
        {loading && <p className="text-center text-blue-500">Loading...</p>}

        {/* Calendar Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left">
                  Stage of Activity
                </th>
                {Array.from({ length: 12 }, (_, i) => (
                  <th key={i} className="border border-gray-300 p-2 text-left">
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {farmingActivities.map((activity, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">
                    {activity.activity}
                  </td>
                  {Array.from({ length: 12 }, (_, i) => {
                    const month = new Date(0, i).toLocaleString("default", {
                      month: "long",
                    });
                    const isActive =
                      month >= activity.start && month <= activity.end;
                    return (
                      <td
                        key={i}
                        className={`border border-gray-300 p-2 ${
                          isActive ? activity.color : ""
                        }`}
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;
