import { useState } from "react";

// Full farming activities (Base activities common to all districts/crops)
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
    activity: "Planting Beans",
    start: "February",
    end: "March",
    color: "bg-yellow-300",
  },
  {
    activity: "Fertilizing",
    start: "March",
    end: "April",
    color: "bg-blue-300",
  },
  { activity: "Weeding", start: "April", end: "April", color: "bg-orange-300" },
  { activity: "Pest Control", start: "April", end: "May", color: "bg-red-300" },
  {
    activity: "Harvesting Early Crops",
    start: "May",
    end: "May",
    color: "bg-purple-300",
  },
  {
    activity: "Planting Maize",
    start: "June",
    end: "June",
    color: "bg-green-200",
  },
  { activity: "Irrigation", start: "June", end: "July", color: "bg-teal-300" },
  { activity: "Weeding", start: "July", end: "July", color: "bg-orange-300" },
  {
    activity: "Fertilizing",
    start: "August",
    end: "September",
    color: "bg-blue-300",
  },
  {
    activity: "Pest Monitoring",
    start: "September",
    end: "September",
    color: "bg-red-300",
  },
  {
    activity: "Crop Maintenance",
    start: "September",
    end: "October",
    color: "bg-purple-300",
  },
  {
    activity: "Harvesting Maize",
    start: "October",
    end: "October",
    color: "bg-green-200",
  },
  {
    activity: "Preparing for Next Season",
    start: "November",
    end: "November",
    color: "bg-gray-300",
  },
  {
    activity: "Soil Testing",
    start: "December",
    end: "December",
    color: "bg-yellow-300",
  },
];

// Function to generate district-specific activity times based on climate (offsetting activity months)
const generateDistrictActivities = () => {
  const districts = {};

  // Example climate offset data (simulating climate differences)
  const climateOffsets = {
    "District 1": 0, // No offset
    "District 2": 1, // Starts 1 month later
    "District 3": 2, // Starts 2 months later
    "District 4": -1, // Starts 1 month earlier
    "District 5": 3, // Starts 3 months later
    // Add more offsets for other districts if needed
  };

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

  const adjustMonth = (month, offset) => {
    const index = months.indexOf(month);
    return months[(index + offset + 12) % 12]; // Ensure it wraps around the year
  };

  for (let i = 1; i <= 5; i++) {
    const districtName = `District ${i}`;
    const offset = climateOffsets[districtName] || 0;

    districts[districtName] = baseActivities.map((activity) => ({
      ...activity,
      start: adjustMonth(activity.start, offset),
      end: adjustMonth(activity.end, offset),
    }));
  }

  return districts;
};

// Declare district calendars once
const districtCalendars = generateDistrictActivities();

const DistrictCalendar = () => {
  const [selectedCrop, setSelectedCrop] = useState("maize");
  const [selectedDistrict, setSelectedDistrict] = useState("District 1");
  const farmingActivities = districtCalendars[selectedDistrict] || [];

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
    setSelectedDistrict("District 1"); // Reset to the first district on crop change
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
          District Crop Calendar
        </h1>

        {/* Dropdown for Crop and District Selection - Same Row */}
        <div className="flex mb-4 justify-between">
          {/* Dropdown for Crop Selection */}
          <div className="w-1/2 mr-4">
            <label className="text-lg font-semibold mr-2">Select Crop:</label>
            <select
              value={selectedCrop}
              onChange={handleCropChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="maize">Maize</option>
              <option value="soyabean">Sorghum</option>
              <option value="soybeans">Soybeans</option>
              <option value="rice">Rice</option>
              <option value="tomatoes">Tomatoes</option>
            </select>
          </div>

          {/* Dropdown for District Selection */}
          <div className="w-1/2">
            <label className="text-lg font-semibold mr-2">
              Select District:
            </label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              {Object.keys(districtCalendars).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar Table */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Activity</th>
              {Array.from({ length: 12 }, (_, i) => (
                <th key={i} className="border border-gray-300 p-2 text-left">
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
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
  );
};

export default DistrictCalendar;
