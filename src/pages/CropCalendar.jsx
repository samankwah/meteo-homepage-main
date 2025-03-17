// import { useState, useEffect } from "react";
// import { districtOfGhana } from "../districts"; // Ensure you have this file containing the district data

// // Base farming activities (common activities for all regions)
// const baseActivities = [
//   {
//     activity: "Site Selection",
//     start: "January",
//     end: "January",
//     color: "bg-[#00B0F0]",
//     advisory:
//       "Clear your arable site purchase certified seed \nfrom registered input dealers. \nUse recommended maize varieties \nsuch as Abontem for short-duration \ngrowth (80-90 days) or Obaatampa \nfor long-duration growth (105-120 days).",
//   },
//   {
//     activity: "Land Preparation",
//     start: "February",
//     end: "February",
//     color: "bg-[#BF9000]",
//     advisory:
//       "Plow the land to aerate the soil. \nUse minimum tillage, and ensure \nthe land is clear from debris. \nSpot burning may be used to clear \norganic matter. \nPrepare the land before the rains.",
//   },

//   {
//     activity: "Planting / Sowing",
//     start: "March",
//     end: "March",
//     color: "bg-[#000000]",
//     advisory:
//       "Plant seeds at the \nrecommended depth and \nspacing for optimal growth.",
//   },
//   {
//     activity: " 1st Fertilizer Application",
//     start: "April",
//     end: "April",
//     color: "bg-[#FFFF00]",
//     advisory:
//       "Apply NPK 20:10:10 at \nthe rate of 2 bags per acre, \n14 days after planting. \nEnsure the field is moist \nbefore application. \nUse side placement at 3-5 cm \naway from the plant. \nBroadcast evenly for healthy growth.",
//   },
//   {
//     activity: " 1st Weeding & control of fall army worm",
//     start: "April",
//     end: "April",
//     color: "bg-[#FF0000]",
//     advisory:
//       "Control weeds early, using \nmanual weeding or recommended \nselective herbicides. \nApply herbicides such as \nNico or Nomini Rice Pro. \nWeeding should be done \nwithin 3 weeks after planting \nto avoid crop competition.",
//   },

//   {
//     activity: "2nd Fertilizer Application (Urea&SOA)",
//     start: "May",
//     end: "May",
//     color: "bg-[#FFFF00]",
//     advisory:
//       "Apply NPK 20:10:10 at \nthe rate of 2 bags per acre, \n14 days after planting. \nEnsure the field is moist \nbefore application. \nUse side placement at 3-5 cm \naway from the plant. \nBroadcast evenly for healthy growth.",
//   },
//   {
//     activity: " 2nd Weeding & Pest Control",
//     start: "May",
//     end: "May",
//     color: "bg-[#FF0000]",
//     advisory:
//       "Control weeds early, using \nmanual weeding or recommended \nselective herbicides. \nApply herbicides such as \nNico or Nomini Rice Pro. \nWeeding should be done \nwithin 3 weeks after planting \nto avoid crop competition. Apply pesticides to control \nFall Armyworm and other pests early. \nCommon pests like Fall Armyworm \ncan be controlled using pesticides \nsuch as Warrior, Super Viper, \nor Bypel Attack. \nApply early in the morning or \nlate in the evening for best results.",
//   },
//   {
//     activity: "Harvesting",
//     start: "July",
//     end: "July",
//     color: "bg-[#008000]",
//     advisory:
//       "Harvest when the maize is mature, \nand store in well-ventilated areas. \nHarvesting should be done early \nwhen the maize silk turns dry and brown. \nStore in hermetic bags to avoid \npest attacks during storage.",
//   },
//   {
//     activity: "Post harvest handling ",
//     start: "August",
//     end: "August",
//     color: "bg-[#993366]",
//     advisory:
//       "Utilize drip irrigation for \nbetter moisture retention. \nGiven the urban nature of Greater Accra, \nconsider efficient irrigation systems \nto manage water use effectively.",
//   },
// ];

// // Regions of Ghana
// const regionsOfGhana = [
//   "Greater Accra",
//   "Ashanti",
//   "Northern",
//   "Eastern",
//   "Western",
//   "Volta",
//   "Upper East",
//   "Upper West",
//   "Central",
//   "Bono",
//   "Western North",
//   "Ahafo",
//   "Savannah",
//   "Oti",
//   "Bono East",
//   "North East",
// ];

// // Function to generate region-specific activity times based on climate (offsetting activity months)
// const generateRegionActivities = () => {
//   const regions = {};

//   // Example climate offset data (simulating climate differences)
//   const climateOffsets = {
//     "Greater Accra": 0, // Minimal offset
//     Ashanti: 3, // Slightly earlier
//     Northern: 4, // Later planting and harvesting
//     Eastern: 3, // Slightly earlier
//     Western: 1, // Varied seasons
//     Volta: 1, // Slightly later
//     "Upper East": 4, // Late planting
//     "Upper West": 3, // Late planting
//     Central: 0, // Neutral
//     Bono: 0, // Neutral
//     "Western North": 1, // Slightly earlier
//     Ahafo: 1, // Slightly earlier
//     Savannah: 3, // Late planting
//     Oti: 2, // Neutral
//     "Bono East": 2, // Neutral
//     "North East": 4, // Late planting
//   };

//   // Array of months
//   const months = [
//     { month: "January", monthNo: 1 },
//     { month: "February", monthNo: 2 },
//     { month: "March", monthNo: 3 },
//     { month: "April", monthNo: 4 },
//     { month: "May", monthNo: 5 },
//     { month: "June", monthNo: 6 },
//     { month: "July", monthNo: 7 },
//     { month: "August", monthNo: 8 },
//     { month: "September", monthNo: 9 },
//     { month: "October", monthNo: 10 },
//     { month: "November", monthNo: 11 },
//     { month: "December", monthNo: 12 },
//   ];

//   // Helper function to adjust the month based on climate offset
//   const adjustMonth = (monthName, offset) => {
//     const monthIndex = months.findIndex((m) => m.month === monthName);
//     const adjustedIndex = (monthIndex + offset + 12) % 12; // Ensure wrapping of months
//     return months[adjustedIndex].month;
//   };

//   // Generate activities for each region based on the climate offset
//   regionsOfGhana.forEach((region) => {
//     const offset = climateOffsets[region] || 0; // Default to 0 if no specific offset
//     regions[region] = baseActivities.map((activity) => ({
//       ...activity,
//       start: adjustMonth(activity.start, offset),
//       end: adjustMonth(activity.end, offset),
//     }));
//   });

//   return regions;
// };

// // Declare region calendars once
// const regionCalendars = generateRegionActivities();

// const CropCalendar = () => {
//   const [selectedCrop, setSelectedCrop] = useState("all");
//   const [selectedRegion, setSelectedRegion] = useState("All Regions");
//   const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
//   const [farmingActivities, setFarmingActivities] = useState([]); // Default state for activities
//   const [loading, setLoading] = useState(false); // Loading state for filtering
//   const [initialLoad, setInitialLoad] = useState(true); // Track if initial load
//   const [hoveredActivity, setHoveredActivity] = useState(null); // To track the hovered activity
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Track position of the tooltip

//   useEffect(() => {
//     const updateFarmingActivities = () => {
//       setLoading(true); // Set loading state

//       let activities = [];

//       // Handle first render (initial load)
//       if (initialLoad) {
//         activities = baseActivities; // Show base activities initially
//         setInitialLoad(false); // Set initial load to false after first load
//       } else if (selectedRegion === "All Regions") {
//         activities = baseActivities; // Show base activities if "All Regions" is selected
//       } else {
//         // Load the region-specific calendar
//         activities = regionCalendars[selectedRegion] || [];
//       }

//       console.log("Updated activities for region:", activities); // Debugging output
//       setFarmingActivities(activities); // Update activities state
//       setLoading(false); // Reset loading state
//     };

//     updateFarmingActivities();
//   }, [selectedRegion, initialLoad]);

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//     setSelectedDistrict("All Districts"); // Reset district when changing region
//   };

//   const handleCropChange = (event) => {
//     setSelectedCrop(event.target.value);
//     setSelectedRegion("All Regions"); // Reset region on crop change
//     setSelectedDistrict("All Districts"); // Reset district on crop change
//   };

//   const handleDistrictChange = (e) => {
//     setSelectedDistrict(e.target.value);
//   };

//   // Function to handle hover
//   const handleMouseEnter = (activity, e) => {
//     setHoveredActivity(activity); // Set the hovered activity
//     setTooltipPosition({ x: e.pageX, y: e.pageY }); // Set tooltip position based on cursor
//   };

//   const handleMouseLeave = () => {
//     setHoveredActivity(null); // Reset the hovered activity when mouse leaves
//   };

//   // Function to handle downloading the crop calendar
//   const handleDownload = () => {
//     // Correct header generation
//     const headers = [
//       "Activity",
//       ...Array.from({ length: 12 }, (_, i) =>
//         new Date(0, i).toLocaleString("default", { month: "long" })
//       ),
//     ];
//     const csvRows = [headers.join(",")];

//     farmingActivities.forEach((activity) => {
//       const row = [
//         activity.activity,
//         ...Array.from({ length: 12 }, (_, i) => {
//           const month = new Date(0, i).toLocaleString("default", {
//             month: "long",
//           });
//           return month >= activity.start && month <= activity.end ? "✔️" : "";
//         }),
//       ];
//       csvRows.push(row.join(",")); // Push the formatted row into csvRows
//     });

//     const csvString = csvRows.join("\n");
//     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "crop_calendar.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Function to handle sharing the calendar
//   const handleShare = async () => {
//     const shareData = {
//       title: "Crop Calendar",
//       text: "Check out this crop calendar!",
//       url: "https://your-website-url.com", // Update with your website URL
//     };

//     if (navigator.share) {
//       try {
//         await navigator.share(shareData);
//         console.log("Share successful!");
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else {
//       alert("Sharing not supported in this browser.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8 pt-24">
//       <div className="max-w-max mx-auto bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col md:flex-row justify-between items-center my-6 mb-10">
// <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
//   Crop Calendar for Major Season
// </h1>
//           <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
//             <button
//               onClick={handleDownload}
//               className="p-2 px-4 w-full md:w-auto bg-green-500 text-white rounded-full text-center"
//             >
//               Download
//             </button>
//             <button
//               onClick={handleShare}
//               className="p-2 px-4 w-full md:w-auto bg-blue-500 text-white rounded-full text-center"
//             >
//               Share
//             </button>
//           </div>
//         </div>

//         {/* Dropdown for Crop and Region Selection */}
//         <div className="flex flex-col md:flex-row mb-4 justify-between gap-4">
//           {/* Dropdown for Crop Selection */}
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <label className="text-lg font-semibold mr-2 block">
//               Select Crop:
//             </label>

//             <select
//               value={selectedCrop}
//               onChange={handleCropChange}
//               className="border border-gray-300 rounded p-2 w-full"
//             >
//               <option value="all">All Crops</option>
//               <option value="maize">Maize</option>
//               <option value="soybean">Soybean</option>
//               <option value="sorghum">Sorghum</option>
//               <option value="rice">Rice</option>
//             </select>
//           </div>

//           {/* Dropdown for Region Selection */}
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <label className="text-lg font-semibold mr-2 block">
//               Select Region:
//             </label>
//             <select
//               value={selectedRegion}
//               onChange={handleRegionChange}
//               className="border border-gray-300 rounded p-2 w-full"
//             >
//               <option value="All Regions">All Regions</option>
//               {regionsOfGhana.map((region) => (
//                 <option key={region} value={region}>
//                   {region}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Dropdown for District Selection */}
//           <div className="w-full md:w-1/3">
//             <label className="text-lg font-semibold mr-2 block">
//               Select District:
//             </label>
//             <select
//               value={selectedDistrict}
//               onChange={handleDistrictChange}
//               className="border border-gray-300 rounded p-2 w-full"
//             >
//               <option value="All Districts">All Districts</option>
//               {districtOfGhana
//                 .filter(
//                   (d) =>
//                     d.region === selectedRegion ||
//                     selectedRegion === "All Regions"
//                 )
//                 .map((district, index) => (
//                   <option key={index} value={district.name}>
//                     {district.name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//         </div>

//         {/* Loading state */}
//         {loading && <p className="text-center text-blue-500">Loading...</p>}

//         {/* Calendar Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 p-2 text-left">
//                   Stage of Activity
//                 </th>
//                 {Array.from({ length: 12 }, (_, i) => (
//                   <th key={i} className="border border-gray-300 p-2 text-left">
//                     {new Date(0, i).toLocaleString("default", {
//                       month: "long",
//                     })}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {farmingActivities.map((activity, index) => (
//                 <tr key={index}>
//                   <td className="border border-gray-300 p-2">
//                     {activity.activity}
//                   </td>
//                   {Array.from({ length: 12 }, (_, i) => {
//                     const month = new Date(0, i).toLocaleString("default", {
//                       month: "long",
//                     });
//                     const isActive =
//                       month >= activity.start && month <= activity.end;
//                     return (
//                       <td
//                         key={i}
//                         className={`border border-gray-300 p-2 ${
//                           isActive ? activity.color : ""
//                         }`}
//                         onMouseEnter={
//                           (e) => handleMouseEnter(activity, e) // Show tooltip on hover
//                         }
//                         onMouseLeave={handleMouseLeave} // Hide tooltip on mouse leave
//                       ></td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* Tooltip for crop advisory */}
//           {hoveredActivity && (
//             <div
//               className="absolute bg-gray-800 w-[220px] text-white text-sm p-2 rounded whitespace-pre-wrap"
//               style={{
//                 top: tooltipPosition.y + 8,
//                 left: tooltipPosition.x + 8,
//               }}
//             >
//               <p className="font-semibold">{hoveredActivity.activity}</p>
//               <p>{`Start: ${hoveredActivity.start}`}</p>
//               <p>{`End: ${hoveredActivity.end}`}</p>
//               <p className="mt-2 text-white">{hoveredActivity.advisory}</p>{" "}
//               {/* Show advisory */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CropCalendar;

import { useState, useEffect } from "react";
import { districtOfGhana } from "../districts";

// Maize farming activities (default for Major Season: February to October)
const maizeActivities = [
  {
    activity: "Site Selection",
    start: "January",
    end: "January",
    color: "bg-[#00B0F0]",
    advisory:
      "Clear your arable site purchase certified seed \nfrom registered input dealers. \nUse recommended maize varieties \nsuch as Abontem for short-duration \ngrowth (80-90 days) or Obaatampa \nfor long-duration growth (105-120 days).",
  },
  {
    activity: "Land Preparation",
    start: "February",
    end: "February",
    color: "bg-[#BF9000]",
    advisory:
      "Plow the land to aerate the soil. \nUse minimum tillage, and ensure \nthe land is clear from debris. \nSpot burning may be used to clear \norganic matter. \nPrepare the land before the rains.",
  },
  {
    activity: "Planting / Sowing",
    start: "March",
    end: "March",
    color: "bg-[#000000]",
    advisory:
      "Plant seeds at the \nrecommended depth and \nspacing for optimal growth.",
  },
  {
    activity: "1st Fertilizer Application",
    start: "April",
    end: "April",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply NPK 20:10:10 at \nthe rate of 2 bags per acre, \n14 days after planting. \nEnsure the field is moist \nbefore application. \nUse side placement at 3-5 cm \naway from the plant. \nBroadcast evenly for healthy growth.",
  },
  {
    activity: "1st Weeding & control of fall army worm",
    start: "April",
    end: "April",
    color: "bg-[#FF0000]",
    advisory:
      "Control weeds early, using \nmanual weeding or recommended \nselective herbicides. \nApply herbicides such as \nNico or Nomini Rice Pro. \nWeeding should be done \nwithin 3 weeks after planting \nto avoid crop competition.",
  },
  {
    activity: "2nd Fertilizer Application (Urea&SOA)",
    start: "May",
    end: "May",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply NPK 20:10:10 at \nthe rate of 2 bags per acre, \n14 days after planting. \nEnsure the field is moist \nbefore application. \nUse side placement at 3-5 cm \naway from the plant. \nBroadcast evenly for healthy growth.",
  },
  {
    activity: "2nd Weeding & Pest Control",
    start: "May",
    end: "May",
    color: "bg-[#FF0000]",
    advisory:
      "Control weeds early, using \nmanual weeding or recommended \nselective herbicides. \nApply herbicides such as \nNico or Nomini Rice Pro. \nWeeding should be done \nwithin 3 weeks after planting \nto avoid crop competition. Apply pesticides to control \nFall Armyworm and other pests early. \nCommon pests like Fall Armyworm \ncan be controlled using pesticides \nsuch as Warrior, Super Viper, \nor Bypel Attack. \nApply early in the morning or \nlate in the evening for best results.",
  },
  {
    activity: "Harvesting",
    start: "July",
    end: "July",
    color: "bg-[#008000]",
    advisory:
      "Harvest when the maize is mature, \nand store in well-ventilated areas. \nHarvesting should be done early \nwhen the maize silk turns dry and brown. \nStore in hermetic bags to avoid \npest attacks during storage.",
  },
  {
    activity: "Post harvest handling",
    start: "August",
    end: "August",
    color: "bg-[#993366]",
    advisory:
      "Utilize drip irrigation for \nbetter moisture retention. \nGiven the urban nature of Greater Accra, \nconsider efficient irrigation systems \nto manage water use effectively.",
  },
];

// Rice farming activities (default for Major Season: February to October)
const riceActivities = [
  {
    activity: "Site Selection",
    start: "February",
    end: "February",
    color: "bg-[#00B0F0]",
    advisory:
      "Choose a well-drained site with access to irrigation or rainfall. \nSelect certified rice varieties such as Jasmine or Nerica for optimal yield. \nEnsure the land is suitable for paddy cultivation.",
  },
  {
    activity: "Land Preparation",
    start: "March",
    end: "March",
    color: "bg-[#BF9000]",
    advisory:
      "Plow and level the land to create a smooth seedbed. \nFlood the field with water for puddling if practicing lowland rice farming. \nRemove weeds and debris before planting.",
  },
  {
    activity: "Seed selection and treatment",
    start: "March",
    end: "March",
    color: "bg-[#808080]",
    advisory:
      "Select high-quality seeds with good germination rates. \nTreat seeds with fungicides to prevent seed-borne diseases. \nSoak seeds in water for 24 hours before sowing.",
  },
  {
    activity: "Nursery Sowing",
    start: "April",
    end: "April",
    color: "bg-[#800080]",
    advisory:
      "Sow seeds in a prepared nursery bed. \nMaintain adequate moisture and protect from pests. \nEnsure proper spacing to avoid overcrowding.",
  },
  {
    activity: "Transplanting",
    start: "April",
    end: "April",
    color: "bg-[#000000]",
    advisory:
      "Transplant seedlings 21-30 days old into the prepared field. \nMaintain a spacing of 20x20 cm for optimal growth. \nEnsure adequate water levels during planting.",
  },
  {
    activity: "1st Weed management",
    start: "May",
    end: "May",
    color: "bg-[#FF0000]",
    advisory:
      "Control weeds manually or with selective herbicides like Nominee Gold. \nWeed within 3 weeks of transplanting to reduce competition. \nMaintain water levels to suppress weed growth.",
  },
  {
    activity: "2nd Weed management",
    start: "June",
    end: "June",
    color: "bg-[#FF0000]",
    advisory:
      "Perform a second weeding to reduce competition. \nApply herbicides if necessary. \nMaintain water levels to minimize weed growth.",
  },
  {
    activity: "1st Fertilizer Application",
    start: "May",
    end: "May",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply NPK 15:15:15 at the rate of 2 bags per acre, 10-14 days after transplanting. \nApply in a broadcast method over the flooded field. \nEnsure water is present to aid nutrient uptake.",
  },
  {
    activity: "2nd Fertilizer Application",
    start: "June",
    end: "June",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply urea at the rate of 1 bag per acre, 30-35 days after transplanting. \nSpread evenly over the flooded field. \nEnsure water management to prevent nutrient loss.",
  },
  {
    activity: "3rd Fertilizer Application",
    start: "July",
    end: "July",
    color: "bg-[#FF00FF]",
    advisory:
      "Apply a top dressing of urea at the rate of 1 bag per acre. \nApply during the panicle initiation stage. \nEnsure even distribution for uniform growth.",
  },
  {
    activity: "Booting",
    start: "July",
    end: "July",
    color: "bg-[#FF00FF]",
    advisory:
      "Monitor the crop for the booting stage. \nEnsure adequate water supply to support grain development. \nProtect the crop from pests and diseases.",
  },
  {
    activity: "Ripening",
    start: "August",
    end: "August",
    color: "bg-[#FF00FF]",
    advisory:
      "Reduce water levels as the crop reaches the ripening stage. \nMonitor for pests like birds that may damage the grains. \nPrepare for harvest as grains mature.",
  },
  {
    activity: "Harvesting",
    start: "September",
    end: "September",
    color: "bg-[#008000]",
    advisory:
      "Harvest when 80-85% of grains are straw-colored. \nUse a sickle or combine harvester. \nDry the paddy to 12-14% moisture content before storage.",
  },
  {
    activity: "Post-harvest Handling",
    start: "October",
    end: "October",
    color: "bg-[#993366]",
    advisory:
      "Thresh and clean the rice promptly to avoid quality loss. \nStore in airtight containers or silos to protect from pests. \nConsider milling within a week of drying.",
  },
];

// Sorghum farming activities (default for Major Season: February to October)
const sorghumActivities = [
  {
    activity: "Site Selection",
    start: "February",
    end: "February",
    color: "bg-[#00B0F0]",
    advisory:
      "Select a site with well-drained sandy loam soil. \nChoose drought-tolerant sorghum varieties like Kapaala or Dorado. \nEnsure the site has good sunlight exposure.",
  },
  {
    activity: "Land Preparation",
    start: "March",
    end: "March",
    color: "bg-[#BF9000]",
    advisory:
      "Plow and harrow the land to create a fine seedbed. \nRemove weeds and debris. \nIncorporate organic matter to improve soil fertility.",
  },
  {
    activity: "Planting / Sowing",
    start: "April",
    end: "April",
    color: "bg-[#000000]",
    advisory:
      "Sow seeds at a depth of 2-3 cm with a spacing of 60x20 cm. \nPlant at the onset of rains for rainfed systems. \nEnsure good seed-to-soil contact.",
  },
  {
    activity: "1st Fertilizer Application",
    start: "May",
    end: "May",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply NPK 15:15:15 at the rate of 2 bags per acre, 2-3 weeks after planting. \nUse a side placement method near the plant base. \nEnsure the soil is moist for better uptake.",
  },
  {
    activity: "1st Weeding & Pest Control",
    start: "May",
    end: "May",
    color: "bg-[#FF0000]",
    advisory:
      "Weed manually or use selective herbicides. \nMonitor for pests like shoot fly and apply insecticides if needed. \nWeed within 3 weeks of planting to reduce competition.",
  },
  {
    activity: "2nd Fertilizer Application (Urea)",
    start: "June",
    end: "June",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply urea at the rate of 1 bag per acre, 5-6 weeks after planting. \nBroadcast evenly around the plants. \nEnsure adequate moisture for nutrient absorption.",
  },
  {
    activity: "2nd Weeding & Disease Control",
    start: "June",
    end: "June",
    color: "bg-[#FF0000]",
    advisory:
      "Perform a second weeding to control late-emerging weeds. \nMonitor for diseases like anthracnose and apply fungicides if necessary. \nMaintain crop health through proper spacing.",
  },
  {
    activity: "Harvesting",
    start: "August",
    end: "August",
    color: "bg-[#008000]",
    advisory:
      "Harvest when grains are hard and dry (about 20% moisture). \nCut the heads with a sickle and dry them under shade. \nThresh and clean the grains before storage.",
  },
  {
    activity: "Post-harvest Handling",
    start: "September",
    end: "September",
    color: "bg-[#993366]",
    advisory:
      "Dry the grains to 12-14% moisture content to prevent mold. \nStore in airtight containers to protect from pests. \nUse treated storage bags to reduce insect damage.",
  },
];

// Tomato farming activities (default for Major Season: April to August)
const tomatoActivities = [
  {
    activity: "Site selection",
    start: "April",
    end: "April",
    color: "bg-[#00B0F0]",
    advisory:
      "Choose a sunny, well-drained site with loamy soil. \nTest soil pH (ideal 6.0-6.8). \nAvoid fields with a history of tomato diseases.",
  },
  {
    activity: "land preparation",
    start: "April",
    end: "April",
    color: "bg-[#BF9000]",
    advisory:
      "Plow and harrow the land to a fine tilth. \nIncorporate organic manure or compost. \nPrepare raised beds for better drainage.",
  },
  {
    activity: "germination test",
    start: "April",
    end: "April",
    color: "bg-[#FF7F00]",
    advisory:
      "Test seed germination by placing 100 seeds in a moist cloth. \nCheck germination rate after 5-7 days. \nUse seeds with at least 80% germination rate.",
  },
  {
    activity: "nursery",
    start: "April",
    end: "April",
    color: "bg-[#808080]",
    advisory:
      "Prepare a nursery bed with fine soil. \nSow seeds thinly and cover lightly with soil. \nWater regularly and protect from direct sunlight.",
  },
  {
    activity: "transplanting",
    start: "May",
    end: "May",
    color: "bg-[#000000]",
    advisory:
      "Transplant seedlings 4-6 weeks old to the main field. \nSpace plants 60x45 cm apart. \nWater immediately after transplanting.",
  },
  {
    activity: "addition of starter solution",
    start: "May",
    end: "May",
    color: "bg-[#87CEEB]",
    advisory:
      "Apply a starter solution of NPK 10:20:10 to boost early growth. \nMix with water and apply around the plant base. \nAvoid over-application to prevent root burn.",
  },
  {
    activity: "pest and disease management",
    start: "May",
    end: "July",
    color: "bg-[#FF0000]",
    advisory:
      "Monitor for pests like aphids and diseases like blight. \nApply insecticides and fungicides as needed. \nUse integrated pest management practices.",
  },
  {
    activity: "1st fertilizer application (NPK)",
    start: "May",
    end: "May",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply NPK 15:15:15 at the rate of 1 bag per acre, 2 weeks after transplanting. \nApply in a ring around the plant. \nWater after application to aid uptake.",
  },
  {
    activity: "earthing-up/staking/trellising/pruning",
    start: "June",
    end: "June",
    color: "bg-[#87CEEB]",
    advisory:
      "Earth up soil around the plant base to support roots. \nStake or trellis plants to prevent lodging. \nPrune suckers to improve air circulation.",
  },
  {
    activity: "2nd fertilizer application (NPK)",
    start: "June",
    end: "June",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply NPK 15:15:15 at the rate of 1 bag per acre during flowering. \nApply in a ring around the plant. \nWater after application to aid uptake.",
  },
  {
    activity: "harvesting",
    start: "August",
    end: "August",
    color: "bg-[#008000]",
    advisory:
      "Harvest when fruits are firm and fully colored. \nPick fruits early in the morning to maintain freshness. \nHandle gently to avoid bruising.",
  },
  {
    activity: "post-harvest",
    start: "August",
    end: "August",
    color: "bg-[#993366]",
    advisory:
      "Sort and grade tomatoes for market. \nStore in a cool, shaded place to extend shelf life. \nPack in ventilated crates for transport.",
  },
];

// Soybean farming activities (default for Major Season: February to September)
const soybeanActivities = [
  {
    activity: "Site Selection",
    start: "February",
    end: "February",
    color: "bg-[#00B0F0]",
    advisory:
      "Select a site with well-drained loam or sandy loam soil. \nChoose soyabean varieties like Jenguma or Anidaso suited to your region. \nEnsure good sunlight and avoid waterlogged areas.",
  },
  {
    activity: "Land Preparation",
    start: "March",
    end: "March",
    color: "bg-[#BF9000]",
    advisory:
      "Plow and harrow the land to a fine tilth. \nIncorporate organic matter or lime if soil is acidic. \nRemove weeds and ensure proper drainage.",
  },
  {
    activity: "Planting / Sowing",
    start: "April",
    end: "April",
    color: "bg-[#000000]",
    advisory:
      "Sow seeds at a depth of 3-5 cm with a spacing of 50x10 cm. \nInoculate seeds with Rhizobium bacteria for nitrogen fixation. \nPlant at the onset of the rainy season.",
  },
  {
    activity: "1st Fertilizer Application",
    start: "May",
    end: "May",
    color: "bg-[#FFFF00]",
    advisory:
      "Apply phosphorus-based fertilizer (e.g., SSP) at 50 kg/ha, 2-3 weeks after planting. \nAvoid excess nitrogen to encourage nodulation. \nApply near the plant base and water lightly.",
  },
  {
    activity: "1st Weeding & Pest Control",
    start: "May",
    end: "May",
    color: "bg-[#FF0000]",
    advisory:
      "Weed manually or use pre-emergence herbicides like Pendimethalin. \nMonitor for pests like pod borers and apply insecticides if needed. \nWeed within 3 weeks of planting.",
  },
  {
    activity: "2nd Weeding & Disease Control",
    start: "June",
    end: "June",
    color: "bg-[#FF0000]",
    advisory:
      "Perform a second weeding to control late weeds. \nWatch for diseases like soyabean rust and apply fungicides if detected. \nMaintain plant health with proper spacing.",
  },
  {
    activity: "Harvesting",
    start: "August",
    end: "August",
    color: "bg-[#008000]",
    advisory:
      "Harvest when pods turn yellow-brown and seeds are hard (about 14% moisture). \nCut plants and dry them in the field. \nThresh and clean seeds promptly.",
  },
  {
    activity: "Post-harvest Handling",
    start: "September",
    end: "September",
    color: "bg-[#993366]",
    advisory:
      "Dry seeds to 12% moisture content to prevent mold. \nStore in airtight containers or silos to protect from pests. \nUse fumigation if storing for long periods.",
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

// List of crops for the slider
const cropsForSlider = ["Maize", "Rice", "Sorghum", "Tomato", "Soyabean"];

// Year and season options
const yearSeasonOptions = [
  { label: "2024 Minor Season", year: 2024, season: "Minor" },
  { label: "2025 Major Season", year: 2025, season: "Major" },
  { label: "2025 Minor Season", year: 2025, season: "Minor" },
];

// Function to generate weeks for each month (4 weeks per month)
const generateWeeks = (season) => {
  const weeks = [];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Days in each month (non-leap year)

  let startMonth, endMonth;
  if (season === "Major") {
    startMonth = 1; // February (month index 1)
    endMonth = 9; // October (month index 9)
  } else {
    startMonth = 8; // September (month index 8)
    endMonth = 11; // December (month index 11)
  }

  for (let month = startMonth; month <= endMonth; month++) {
    const days = daysInMonth[month];
    const daysPerWeek = Math.ceil(days / 4);

    for (let weekNum = 1; weekNum <= 4; weekNum++) {
      const startDay = (weekNum - 1) * daysPerWeek + 1;
      const endDay = Math.min(weekNum * daysPerWeek, days);
      const dateRange = `${String(startDay).padStart(2, "0")}-${String(
        endDay
      ).padStart(2, "0")}`;
      weeks.push({
        month: new Date(0, month).toLocaleString("default", { month: "long" }),
        monthIndex: month,
        week: `Week ${weekNum}`,
        dateRange,
      });
    }
  }

  return weeks;
};

// Function to adjust activities for the selected season
const adjustActivitiesForSeason = (baseActivities, season) => {
  const months = [
    { month: "January", monthNo: 1 },
    { month: "February", monthNo: 2 },
    { month: "March", monthNo: 3 },
    { month: "April", monthNo: 4 },
    { month: "May", monthNo: 5 },
    { month: "June", monthNo: 6 },
    { month: "July", monthNo: 7 },
    { month: "August", monthNo: 8 },
    { month: "September", monthNo: 9 },
    { month: "October", monthNo: 10 },
    { month: "November", monthNo: 11 },
    { month: "December", monthNo: 12 },
  ];

  if (season === "Major") {
    return baseActivities; // Major season activities are already set from February to October
  }

  // For Minor Season (September to December), compress the timeline
  const majorSeasonMonths = baseActivities.map(
    (activity) => months.find((m) => m.month === activity.start).monthNo
  );
  const minMajorMonth = Math.min(...majorSeasonMonths);
  const maxMajorMonth = Math.max(...majorSeasonMonths);
  const majorSeasonDuration = maxMajorMonth - minMajorMonth + 1;

  const minorSeasonStartMonth = 9; // September
  const minorSeasonEndMonth = 12; // December
  const minorSeasonDuration = minorSeasonEndMonth - minorSeasonStartMonth + 1;

  return baseActivities.map((activity) => {
    const activityStartMonth = months.find(
      (m) => m.month === activity.start
    ).monthNo;
    const activityEndMonth = months.find(
      (m) => m.month === activity.end
    ).monthNo;

    // Calculate the relative position of the activity in the Major Season timeline
    const startRatio =
      (activityStartMonth - minMajorMonth) / majorSeasonDuration;
    const endRatio = (activityEndMonth - minMajorMonth) / majorSeasonDuration;

    // Map to the Minor Season timeline
    const newStartMonthNo = Math.round(
      minorSeasonStartMonth + startRatio * minorSeasonDuration
    );
    const newEndMonthNo = Math.round(
      minorSeasonStartMonth + endRatio * minorSeasonDuration
    );

    const newStartMonth = months.find(
      (m) => m.monthNo === newStartMonthNo
    ).month;
    const newEndMonth = months.find((m) => m.monthNo === newEndMonthNo).month;

    return {
      ...activity,
      start: newStartMonth,
      end: newEndMonth,
    };
  });
};

// Function to generate region-specific activity times based on climate (offsetting activity months)
const generateRegionActivities = (baseActivities, offset) => {
  const regions = {};

  const months = [
    { month: "January", monthNo: 1 },
    { month: "February", monthNo: 2 },
    { month: "March", monthNo: 3 },
    { month: "April", monthNo: 4 },
    { month: "May", monthNo: 5 },
    { month: "June", monthNo: 6 },
    { month: "July", monthNo: 7 },
    { month: "August", monthNo: 8 },
    { month: "September", monthNo: 9 },
    { month: "October", monthNo: 10 },
    { month: "November", monthNo: 11 },
    { month: "December", monthNo: 12 },
  ];

  const adjustMonth = (monthName, offset) => {
    const monthIndex = months.findIndex((m) => m.month === monthName);
    const adjustedIndex = (monthIndex + offset + 12) % 12;
    return months[adjustedIndex].month;
  };

  regionsOfGhana.forEach((region) => {
    regions[region] = baseActivities.map((activity) => ({
      ...activity,
      start: adjustMonth(activity.start, offset),
      end: adjustMonth(activity.end, offset),
    }));
  });

  return regions;
};

const CropCalendar = () => {
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedYearSeason, setSelectedYearSeason] =
    useState("2025 Major Season"); // Default to 2025 Major Season
  const [farmingActivities, setFarmingActivities] = useState([]); // Default state for activities
  const [loading, setLoading] = useState(false); // Loading state for filtering
  const [initialLoad, setInitialLoad] = useState(true); // Track if initial load
  const [hoveredActivity, setHoveredActivity] = useState(null); // To track the hovered activity
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Track position of the tooltip
  const [currentSlide, setCurrentSlide] = useState(0); // State for the slider
  const [weeksData, setWeeksData] = useState([]); // Dynamic weeks data based on season

  // Get the selected year and season details
  const selectedOption = yearSeasonOptions.find(
    (option) => option.label === selectedYearSeason
  );
  const selectedYear = selectedOption?.year || 2025;
  const selectedSeason = selectedOption?.season || "Major";

  // Update weeks data based on the selected season
  useEffect(() => {
    const weeks = generateWeeks(selectedSeason);
    setWeeksData(weeks);
  }, [selectedSeason]);

  // Slider effect to cycle through crops
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cropsForSlider.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const updateFarmingActivities = () => {
      setLoading(true);

      let baseActivities = [];
      let adjustedActivities = [];
      let regionCalendars = {};
      let offset = 0;

      // Determine the base activities based on the selected crop
      if (selectedCrop === "maize" || selectedCrop === "all") {
        baseActivities = maizeActivities;
      } else if (selectedCrop === "rice") {
        baseActivities = riceActivities;
      } else if (selectedCrop === "sorghum") {
        baseActivities = sorghumActivities;
      } else if (selectedCrop === "tomato") {
        baseActivities = tomatoActivities;
      } else if (selectedCrop === "soyabean") {
        baseActivities = soybeanActivities;
      }

      // Adjust activities for the selected season
      adjustedActivities = adjustActivitiesForSeason(
        baseActivities,
        selectedSeason
      );

      // Determine offset based on region or district
      if (selectedDistrict !== "All Districts") {
        const district = districtOfGhana.find(
          (d) => d.name === selectedDistrict
        );
        if (district) {
          const climateOffsets = {
            "Greater Accra": 3,
            Ashanti: 2,
            Northern: 4,
            Eastern: 2,
            Western: 3,
            Volta: 2,
            "Upper East": 4,
            "Upper West": 4,
            Central: 2,
            Bono: 3,
            "Western North": 2,
            Ahafo: 2,
            Savannah: 4,
            Oti: 2,
            "Bono East": 3,
            "North East": 4,
          };
          offset = climateOffsets[district.region] || 0;
        }
      } else if (selectedRegion !== "All Regions") {
        const climateOffsets = {
          "Greater Accra": 1,
          Ashanti: 1,
          Northern: 2,
          Eastern: 1,
          Western: 1,
          Volta: 1,
          "Upper East": 2,
          "Upper West": 2,
          Central: 1,
          Bono: 2,
          "Western North": 1,
          Ahafo: 1,
          Savannah: 1,
          Oti: 1,
          "Bono East": 2,
          "North East": 1,
        };
        offset = climateOffsets[selectedRegion] || 0;
      }

      // Generate region-specific activities with the determined offset
      regionCalendars = generateRegionActivities(adjustedActivities, offset);

      if (initialLoad) {
        setFarmingActivities(adjustedActivities); // Default to adjusted activities on initial load
        setInitialLoad(false);
      } else if (
        selectedRegion === "All Regions" &&
        selectedDistrict === "All Districts"
      ) {
        setFarmingActivities(adjustedActivities);
      } else {
        setFarmingActivities(regionCalendars[selectedRegion] || []);
      }

      console.log(
        "Updated activities for crop, region, district, and season:",
        adjustedActivities
      );
      setLoading(false);
    };

    updateFarmingActivities();
  }, [
    selectedCrop,
    selectedRegion,
    selectedDistrict,
    selectedYearSeason,
    initialLoad,
  ]);

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

  const handleYearSeasonChange = (e) => {
    setSelectedYearSeason(e.target.value);
  };

  const handleMouseEnter = (activity, e) => {
    setHoveredActivity(activity);
    setTooltipPosition({ x: e.pageX, y: e.pageY });
  };

  const handleMouseLeave = () => {
    setHoveredActivity(null);
  };

  const handleDownload = () => {
    const headers = [
      "Activity",
      ...weeksData.map(
        (week) => `${week.month} ${week.week} (${week.dateRange})`
      ),
    ];
    const csvRows = [headers.join(",")];

    farmingActivities.forEach((activity) => {
      const row = [
        activity.activity,
        ...weeksData.map((week) => {
          const month = week.month;
          const isActive = month >= activity.start && month <= activity.end;
          return isActive ? "✔️" : "";
        }),
      ];
      csvRows.push(row.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `crop_calendar_${selectedYearSeason}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const shareData = {
      title: `Crop Calendar - ${selectedYearSeason}`,
      text: `Check out this crop calendar for ${selectedYearSeason}!`,
      url: "https://your-website-url.com",
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
    <div className="bg-gradient-to-br from-blue-50 to-gray-200 min-h-screen p-0 lg:pt-20 pt-14">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center my-8 mb-10">
          <h1 className="text-gray-800 text-3xl font-bold mb-4 text-center">
            Production Calendar for Major Season
          </h1>
          {/* Slider with year and season */}
          <div className="relative overflow-hidden w-full md:w-1/2 h-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cropsForSlider.map((crop, index) => (
                <div
                  key={index}
                  className="min-w-full text-red-600 text-2xl font-bold text-center"
                >
                  Crop Calendar for {selectedYearSeason} - {crop}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
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

        {/* Dropdowns for Region, District, Crop, and Year/Season */}
        <div className="flex flex-col md:flex-row mb-4 justify-between gap-1">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2 block">
              Select Year & Season
            </label>
            <select
              value={selectedYearSeason}
              onChange={handleYearSeasonChange}
              className="border border-gray-300 rounded p-2 w-[60%]"
            >
              {yearSeasonOptions.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2 block">
              Select Region
            </label>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="border border-gray-300 rounded p-2 w-[60%]"
            >
              <option value="All Regions">All Regions</option>
              {regionsOfGhana.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-1/4">
            <label className="text-lg font-semibold mr-2 block">
              Select District
            </label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="border border-gray-300 rounded p-2 w-[60%]"
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

          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <label className="text-lg font-semibold mr-2 block">
              Select Crop
            </label>
            <select
              value={selectedCrop}
              onChange={handleCropChange}
              className="border border-gray-300 rounded p-2 w-[60%]"
            >
              <option value="all">All Crops</option>
              <option value="maize">Maize</option>
              <option value="rice">Rice</option>
              <option value="sorghum">Sorghum</option>
              <option value="tomato">Tomato</option>
              <option value="soyabean">Soyabean</option>
            </select>
          </div>
        </div>

        {/* Loading state */}
        {loading && <p className="text-center text-blue-500">Loading...</p>}

        {/* Calendar Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              {/* Row 1: Months */}
              <tr className="bg-gray-200">
                <th
                  className="border border-gray-300 p-0 text-start sticky left-0 bg-gray-200 z-50"
                  rowSpan="2"
                >
                  Stage of Activity
                </th>
                {Array.from(
                  {
                    length:
                      selectedSeason === "Major"
                        ? 9 // February to October (9 months)
                        : 4, // September to December (4 months)
                  },
                  (_, i) => {
                    const monthIndex =
                      selectedSeason === "Major" ? i + 1 : i + 8; // Start from February (1) or September (8)
                    const month = new Date(0, monthIndex).toLocaleString(
                      "default",
                      { month: "long" }
                    );
                    const weeksInMonth = weeksData.filter(
                      (week) => week.month === month
                    );
                    return (
                      <th
                        key={i}
                        className="border border-gray-300 p-1 text-left"
                        colSpan={weeksInMonth.length}
                      >
                        {month}
                      </th>
                    );
                  }
                )}
              </tr>
              {/* Row 2: Weeks and Dates */}
              <tr className="bg-gray-100">
                {weeksData.map((week, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 p-0 text-justify text-xs"
                  >
                    <div>{week.week}</div>
                    <div>{week.dateRange}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {farmingActivities.map((activity, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-0 sticky left-0 bg-white z-10">
                    {activity.activity}
                  </td>
                  {weeksData.map((week, weekIndex) => {
                    const month = week.month;
                    const isActive =
                      month >= activity.start && month <= activity.end;
                    return (
                      <td
                        key={weekIndex}
                        className={`border border-gray-300 p-2 ${
                          isActive ? activity.color : ""
                        }`}
                        onMouseEnter={(e) => handleMouseEnter(activity, e)}
                        onMouseLeave={handleMouseLeave}
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Tooltip for crop advisory */}
          {hoveredActivity && (
            <div
              className="absolute bg-gray-800 w-[200px] text-white text-sm p-2 rounded whitespace-pre-wrap"
              style={{
                top: tooltipPosition.y + 6,
                left: tooltipPosition.x + 6,
              }}
            >
              <p className="font-semibold">{hoveredActivity.activity}</p>
              <p>{`Start: ${hoveredActivity.start}`}</p>
              <p>{`End: ${hoveredActivity.end}`}</p>
              <p className="mt-2 text-white">{hoveredActivity.advisory}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;
