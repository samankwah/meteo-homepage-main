// // // import { useState } from "react";
// // // import { FaCloudSun, FaCloudRain, FaDownload, FaSun } from "react-icons/fa";
// // // import SON from "../assets/images/SON.png";

// // // // Forecast Data for each zone
// // // // const zoneData = {
// // // //   "East Coast": {
// // // //     // start: "1st Week of March",
// // // //     // end: "2nd Week of July",
// // // //     // lengthOfSeason: "121-147",
// // // //     // cumulativeRainfall: { MAM: [283, 430], AMJ: [346, 580] },
// // // //     // drySpells: { early: [9, 10], late: [13, 14, 18] },
// // // //     startLTM: "1st Week of March - 3rd Week of April",
// // // //     endLTM: "1st Week of July - 3rd Week of July",
// // // //     lengthLTM: "91-112",
// // // //     startForecast: "1st Week of March - 3rd Week of April",
// // // //     endForecast: "1st Week of July - 2nd Week of July",
// // // //     lengthForecast: "121-147",
// // // //     rainfallLTM: { mam: "217-420", amj: "391-478" },
// // // //     rainfallForecast: { mam: "283-430", amj: "346-580" },
// // // //     drySpellsLTM: { early: 9, late: 13 },
// // // //     drySpellsForecast: { early: 10, late: "14-18" },
// // // //   },
// // // //   "Forest Zone": {
// // // //     start: "2nd Week of March",
// // // //     end: "1st Week of August",
// // // //     lengthOfSeason: "110-135",
// // // //     cumulativeRainfall: { MAM: [300, 450], AMJ: [400, 600] },
// // // //     drySpells: { early: [8, 11], late: [12, 15] },
// // // //   },
// // // //   "Savannah Zone": {
// // // //     start: "3rd Week of March",
// // // //     end: "4th Week of July",
// // // //     lengthOfSeason: "95-120",
// // // //     cumulativeRainfall: { MAM: [200, 300], AMJ: [350, 500] },
// // // //     drySpells: { early: [10, 12], late: [13, 17] },
// // // //   },
// // // //   "Coastal Savannah": {
// // // //     start: "4th Week of March",
// // // //     end: "3rd Week of July",
// // // //     lengthOfSeason: "115-130",
// // // //     cumulativeRainfall: { MAM: [250, 400], AMJ: [370, 540] },
// // // //     drySpells: { early: [9, 11], late: [14, 16] },
// // // //   },
// // // // };

// // // // const SeasonalForecast = () => {
// // // //   const [selectedZone, setSelectedZone] = useState("East Coast");

// // // //   const handleZoneChange = (e) => {
// // // //     setSelectedZone(e.target.value);
// // // //   };

// // // //   const forecast = zoneData[selectedZone];

// // // //   const handleDownload = () => {
// // // //     const link = document.createElement("a");
// // // //     link.href = "/path-to-forecast-report.pdf"; // Provide correct path to the report
// // // //     link.download = `${selectedZone}_Seasonal_Forecast_2024.pdf`;
// // // //     link.click();
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-6 bg-teal-900 text-white">
// // // //       {/* Header Section */}
// // // //       <div className="text-center mb-8">
// // // //         <h1 className="text-4xl font-bold">Seasonal Forecast</h1>
// // // //         <p className="text-xl text-yellow-400">
// // // //           NORMAL ONSET AND EARLY CESSATION for {selectedZone} Zone
// // // //         </p>
// // // //       </div>

// // // //       {/* Dropdown Filter for Agro-Ecological Zones */}
// // // //       <div className="mb-6">
// // // //         <label className="block text-lg mb-2">
// // // //           Select Agro-Ecological Zone:
// // // //         </label>
// // // //         <select
// // // //           value={selectedZone}
// // // //           onChange={handleZoneChange}
// // // //           className="p-2 text-black rounded-lg"
// // // //         >
// // // //           {Object.keys(zoneData).map((zone, index) => (
// // // //             <option key={index} value={zone}>
// // // //               {zone}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //       </div>

// // // //       {/* Content Grid */}
// // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // //         {/* Map Section */}
// // // //         <div className="bg-white text-black rounded-lg p-4">
// // // //           <img
// // // //             src={SON} // Update with correct path
// // // //             alt="Map"
// // // //             className="w-full h-auto mb-4"
// // // //             style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "cover" }} // Image size adjustments
// // // //           />
// // // //         </div>

// // // //         {/* LTM and Forecast Table */}
// // // //         <div className="bg-white text-black rounded-lg p-6">
// // // //           <table className="w-full table-auto" style={{ tableLayout: "fixed" }}>
// // // //             {" "}
// // // //             {/* Fixed table layout */}
// // // //             <thead>
// // // //               <tr>
// // // //                 <th className="p-2 bg-gray-200" style={{ width: "33%" }}>
// // // //                   START
// // // //                 </th>
// // // //                 <th className="p-2 bg-gray-200" style={{ width: "33%" }}>
// // // //                   END
// // // //                 </th>
// // // //                 <th className="p-2 bg-gray-200" style={{ width: "33%" }}>
// // // //                   LENGTH OF SEASON (Days)
// // // //                 </th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               <tr>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   {forecast.start}
// // // //                 </td>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   {forecast.end}
// // // //                 </td>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   {forecast.lengthOfSeason}
// // // //                 </td>
// // // //               </tr>
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Cumulative Rainfall */}
// // // //         <div className="bg-white text-black rounded-lg p-6">
// // // //           <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center">
// // // //             <FaCloudRain className="mr-2 text-blue-500" /> Cumulative Rainfall
// // // //           </h3>
// // // //           <table className="w-full table-auto">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th className="p-2 bg-gray-200">PERIOD</th>
// // // //                 <th className="p-2 bg-gray-200">LTM (mm)</th>
// // // //                 <th className="p-2 bg-gray-200">2024 (mm)</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               <tr>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   MAM
// // // //                 </td>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   217-420
// // // //                 </td>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   {forecast.cumulativeRainfall.MAM.join(" - ")}
// // // //                 </td>
// // // //               </tr>
// // // //               <tr className="bg-gray-100">
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   AMJ
// // // //                 </td>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   391-478
// // // //                 </td>
// // // //                 <td className="p-2 text-center border-b border-gray-300">
// // // //                   {forecast.cumulativeRainfall.AMJ.join(" - ")}
// // // //                 </td>
// // // //               </tr>
// // // //             </tbody>
// // // //           </table>
// // // //           <div className="mt-4">
// // // //             <h4 className="font-bold text-red-600">Advisories:</h4>
// // // //             <ul className="list-disc ml-5">
// // // //               <li>Harvest rainwater and store for irrigation.</li>
// // // //               <li>Cultivate early short cycle crops.</li>
// // // //               <li>Contact agricultural experts for information.</li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // const SeasonalForecast = () => {
// // //   const [selectedZone, setSelectedZone] = useState("East Coast");

// // //   // Data for different zones
// // //   const forecastData = {
// // //     "East Coast": {
// // //       startLTM: "1st Week of March - 3rd Week of April",
// // //       endLTM: "1st Week of July - 3rd Week of July",
// // //       lengthLTM: "91-112",
// // //       startForecast: "1st Week of March - 3rd Week of April",
// // //       endForecast: "1st Week of July - 2nd Week of July",
// // //       lengthForecast: "121-147",
// // //       rainfallLTM: { mam: "217-420", amj: "391-478" },
// // //       rainfallForecast: { mam: "283-430", amj: "346-580" },
// // //       drySpellsLTM: { early: 9, late: 13 },
// // //       drySpellsForecast: { early: 10, late: "14-18" },
// // //     },
// // //     "West Coast": {
// // //       startLTM: "2nd Week of March - 4th Week of April",
// // //       endLTM: "2nd Week of July - 4th Week of July",
// // //       lengthLTM: "92-115",
// // //       startForecast: "2nd Week of March - 4th Week of April",
// // //       endForecast: "2nd Week of July - 3rd Week of July",
// // //       lengthForecast: "120-140",
// // //       rainfallLTM: { mam: "200-400", amj: "380-460" },
// // //       rainfallForecast: { mam: "270-420", amj: "320-550" },
// // //       drySpellsLTM: { early: 10, late: 14 },
// // //       drySpellsForecast: { early: 12, late: "15-20" },
// // //     },
// // //     "Forest Zone": {
// // //       startLTM: "1st Week of April - 3rd Week of April",
// // //       endLTM: "1st Week of August - 3rd Week of August",
// // //       lengthLTM: "105-130",
// // //       startForecast: "1st Week of April - 4th Week of April",
// // //       endForecast: "1st Week of August - 2nd Week of August",
// // //       lengthForecast: "115-135",
// // //       rainfallLTM: { mam: "250-470", amj: "400-500" },
// // //       rainfallForecast: { mam: "300-500", amj: "420-590" },
// // //       drySpellsLTM: { early: 11, late: 12 },
// // //       drySpellsForecast: { early: 11, late: "14-16" },
// // //     },
// // //     "Transitional Zone": {
// // //       startLTM: "2nd Week of March - 2nd Week of April",
// // //       endLTM: "1st Week of August - 4th Week of August",
// // //       lengthLTM: "110-140",
// // //       startForecast: "2nd Week of March - 2nd Week of April",
// // //       endForecast: "1st Week of August - 3rd Week of August",
// // //       lengthForecast: "120-150",
// // //       rainfallLTM: { mam: "280-450", amj: "420-510" },
// // //       rainfallForecast: { mam: "320-490", amj: "460-600" },
// // //       drySpellsLTM: { early: 12, late: 13 },
// // //       drySpellsForecast: { early: 12, late: "15-17" },
// // //     },
// // //     // Add more zones here if needed...
// // //   };

// // //   const currentData = forecastData[selectedZone];

// // //   const handleDownload = () => {
// // //     // Logic for downloading the forecast (PDF, CSV, etc.)
// // //     console.log("Download initiated");
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-6 bg-teal-900 text-white">
// // //       {/* Header Section */}
// // //       <div className="text-center mb-8">
// // //         <h1 className="text-4xl font-bold">{selectedZone} (MAM & AMJ)</h1>
// // //         <p className="text-xl text-yellow-400">
// // //           NORMAL ONSET AND EARLY CESSATION
// // //         </p>
// // //       </div>

// // //       {/* Zone Selection */}
// // //       <div className="flex justify-center mb-6">
// // //         <select
// // //           value={selectedZone}
// // //           onChange={(e) => setSelectedZone(e.target.value)}
// // //           className="text-black p-2 rounded-md"
// // //         >
// // //           {Object.keys(forecastData).map((zone) => (
// // //             <option key={zone} value={zone}>
// // //               {zone}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {/* Content Grid */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //         {/* Map Section */}
// // //         <div className="bg-white text-black rounded-lg p-4">
// // //           <img
// // //             src={SON}
// // //             alt="Map"
// // //             className="w-full h-auto mb-4 max-w-xs mx-auto"
// // //           />
// // //         </div>

// // //         {/* LTM and Forecast Table */}
// // //         <div className="bg-white text-black rounded-lg p-6">
// // //           <table className="w-full table-fixed border border-gray-300">
// // //             <thead>
// // //               <tr className="border-b">
// // //                 <th className="p-2 bg-gray-200 border">LTM</th>
// // //                 <th className="p-2 bg-gray-200 border">2024 Forecast</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr className="border-b">
// // //                 <td className="p-2 text-center border">Start</td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.startLTM}
// // //                 </td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.startForecast}
// // //                 </td>
// // //               </tr>
// // //               <tr className="border-b">
// // //                 <td className="p-2 text-center border">End</td>
// // //                 <td className="p-2 text-center border">{currentData.endLTM}</td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.endForecast}
// // //                 </td>
// // //               </tr>
// // //               <tr className="border-b">
// // //                 <td className="p-2 text-center border">
// // //                   Length of Season (Days)
// // //                 </td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.lengthLTM}
// // //                 </td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.lengthForecast}
// // //                 </td>
// // //               </tr>
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Cumulative Rainfall */}
// // //         <div className="bg-white text-black rounded-lg p-6">
// // //           <h3 className="text-xl font-bold text-teal-900 mb-4">
// // //             Cumulative Rainfall
// // //           </h3>
// // //           <table className="w-full table-fixed border border-gray-300">
// // //             <thead>
// // //               <tr className="border-b">
// // //                 <th className="p-2 bg-gray-200">PERIOD</th>
// // //                 <th className="p-2 bg-gray-200">LTM (mm)</th>
// // //                 <th className="p-2 bg-gray-200">2024 (mm)</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr className="border-b">
// // //                 <td className="p-2 text-center border">MAM</td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.rainfallLTM.mam}
// // //                 </td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.rainfallForecast.mam}
// // //                 </td>
// // //               </tr>
// // //               <tr className="border-b">
// // //                 <td className="p-2 text-center border">AMJ</td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.rainfallLTM.amj}
// // //                 </td>
// // //                 <td className="p-2 text-center border">
// // //                   {currentData.rainfallForecast.amj}
// // //                 </td>
// // //               </tr>
// // //             </tbody>
// // //           </table>
// // //           <div className="mt-4">
// // //             <h4 className="font-bold text-red-600">Advisories:</h4>
// // //             <ul className="list-disc ml-5">
// // //               <li>Harvest rainwater and store for irrigation.</li>
// // //               <li>Cultivate early short cycle crops.</li>
// // //               <li>Contact agricultural experts for information.</li>
// // //             </ul>
// // //           </div>
// // //         </div>

// // //         {/* Dry Spells */}
// // //         <div className="bg-white text-black rounded-lg p-6">
// // //           <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center">
// // //             <FaSun className="mr-2 text-yellow-500" /> Dry Spells
// // //           </h3>
// // //           <table className="w-full table-auto">
// // //             <thead>
// // //               <tr>
// // //                 <th className="p-2 bg-gray-200">PERIOD</th>
// // //                 <th className="p-2 bg-gray-200">LTM (Days)</th>
// // //                 <th className="p-2 bg-gray-200">2024 (Days)</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr>
// // //                 <td className="p-2 text-center border-b border-gray-300">
// // //                   EARLY (1st)
// // //                 </td>
// // //                 <td className="p-2 text-center border-b border-gray-300">9</td>
// // //                 <td className="p-2 text-center border-b border-gray-300">
// // //                   {forecast.drySpells.early.join(" - ")}
// // //                 </td>
// // //               </tr>
// // //               <tr className="bg-gray-100">
// // //                 <td className="p-2 text-center border-b border-gray-300">
// // //                   LATE (2nd)
// // //                 </td>
// // //                 <td className="p-2 text-center border-b border-gray-300">13</td>
// // //                 <td className="p-2 text-center border-b border-gray-300">
// // //                   {forecast.drySpells.late.join(" - ")}
// // //                 </td>
// // //               </tr>
// // //             </tbody>
// // //           </table>
// // //           <div className="mt-4">
// // //             <h4 className="font-bold text-red-600">Advisories:</h4>
// // //             <ul className="list-disc ml-5">
// // //               <li>Plant cover crops or leguminous crops.</li>
// // //               <li>Adopt mulching practices.</li>
// // //               <li>Plant drought-resistant varieties of crops.</li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Download Button */}
// // //       <div className="mt-8 text-center">
// // //         <button
// // //           onClick={handleDownload}
// // //           className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-full flex items-center justify-center"
// // //         >
// // //           <FaDownload className="mr-2" /> Download Forecast
// // //         </button>
// // //       </div>

// // //       {/* Footer: Long-term Mean Explanation */}
// // //       <div className="mt-8 text-center text-sm">
// // //         <p>
// // //           <span className="font-bold">Long term mean (LTM)</span> is the 30-year
// // //           average condition of a given Zone from 1991-2020.
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SeasonalForecast;

// // import { useState } from "react";
// // import { FaCloudSun, FaCloudRain, FaDownload, FaSun } from "react-icons/fa";
// // import SON from "../assets/images/SON.png";

// // const SeasonalForecast = () => {
// //   const [selectedZone, setSelectedZone] = useState("East Coast");

// //   // Data for different zones
// //   const forecastData = {
// //     "East Coast": {
// //       startLTM: "1st Week of March - 3rd Week of April",
// //       endLTM: "1st Week of July - 3rd Week of July",
// //       lengthLTM: "91-112",
// //       startForecast: "1st Week of March - 3rd Week of April",
// //       endForecast: "1st Week of July - 2nd Week of July",
// //       lengthForecast: "121-147",
// //       rainfallLTM: { mam: "217-420", amj: "391-478" },
// //       rainfallForecast: { mam: "283-430", amj: "346-580" },
// //       drySpellsLTM: { early: 9, late: 13 },
// //       drySpellsForecast: { early: 10, late: "14-18" },
// //     },
// //     "West Coast": {
// //       startLTM: "2nd Week of March - 4th Week of April",
// //       endLTM: "2nd Week of July - 4th Week of July",
// //       lengthLTM: "92-115",
// //       startForecast: "2nd Week of March - 4th Week of April",
// //       endForecast: "2nd Week of July - 3rd Week of July",
// //       lengthForecast: "120-140",
// //       rainfallLTM: { mam: "200-400", amj: "380-460" },
// //       rainfallForecast: { mam: "270-420", amj: "320-550" },
// //       drySpellsLTM: { early: 10, late: 14 },
// //       drySpellsForecast: { early: 12, late: "15-20" },
// //     },
// //     "Forest Zone": {
// //       startLTM: "1st Week of April - 3rd Week of April",
// //       endLTM: "1st Week of August - 3rd Week of August",
// //       lengthLTM: "105-130",
// //       startForecast: "1st Week of April - 4th Week of April",
// //       endForecast: "1st Week of August - 2nd Week of August",
// //       lengthForecast: "115-135",
// //       rainfallLTM: { mam: "250-470", amj: "400-500" },
// //       rainfallForecast: { mam: "300-500", amj: "420-590" },
// //       drySpellsLTM: { early: 11, late: 12 },
// //       drySpellsForecast: { early: 11, late: "14-16" },
// //     },
// //     "Transitional Zone": {
// //       startLTM: "2nd Week of March - 2nd Week of April",
// //       endLTM: "1st Week of August - 4th Week of August",
// //       lengthLTM: "110-140",
// //       startForecast: "2nd Week of March - 2nd Week of April",
// //       endForecast: "1st Week of August - 3rd Week of August",
// //       lengthForecast: "120-150",
// //       rainfallLTM: { mam: "280-450", amj: "420-510" },
// //       rainfallForecast: { mam: "320-490", amj: "460-600" },
// //       drySpellsLTM: { early: 12, late: 13 },
// //       drySpellsForecast: { early: 12, late: "15-17" },
// //     },
// //     // Add more zones here if needed...
// //   };

// //   const currentData = forecastData[selectedZone];

// //   const handleDownload = () => {
// //     // Logic for downloading the forecast (PDF, CSV, etc.)
// //     console.log("Download initiated");
// //   };

// //   return (
// //     <div className="container mx-auto p-6 bg-teal-900 text-white">
// //       {/* Header Section */}
// //       <div className="text-center mb-8">
// //         <h1 className="text-4xl font-bold">{selectedZone} (MAM & AMJ)</h1>
// //         <p className="text-xl text-yellow-400">
// //           NORMAL ONSET AND EARLY CESSATION
// //         </p>
// //       </div>

// //       {/* Zone Selection */}
// //       <div className="flex justify-center mb-6">
// //         <select
// //           value={selectedZone}
// //           onChange={(e) => setSelectedZone(e.target.value)}
// //           className="text-black p-2 rounded-md"
// //         >
// //           {Object.keys(forecastData).map((zone) => (
// //             <option key={zone} value={zone}>
// //               {zone}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Content Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Map Section */}
// //         <div className="bg-white text-black rounded-lg p-4">
// //           <img
// //             src={SON}
// //             alt="Map"
// //             className="w-full h-auto mb-4 max-w-xs mx-auto"
// //           />
// //         </div>

// //         {/* LTM and Forecast Table */}
// //         <div className="bg-white text-black rounded-lg p-6">
// //           <table className="w-full table-fixed border border-gray-300">
// //             <thead>
// //               <tr className="border-b">
// //                 <th className="p-2 bg-gray-200 border">LTM</th>
// //                 <th className="p-2 bg-gray-200 border">2024 Forecast</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr className="border-b">
// //                 <td className="p-2 text-center border">Start</td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.startLTM}
// //                 </td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.startForecast}
// //                 </td>
// //               </tr>
// //               <tr className="border-b">
// //                 <td className="p-2 text-center border">End</td>
// //                 <td className="p-2 text-center border">{currentData.endLTM}</td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.endForecast}
// //                 </td>
// //               </tr>
// //               <tr className="border-b">
// //                 <td className="p-2 text-center border">
// //                   Length of Season (Days)
// //                 </td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.lengthLTM}
// //                 </td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.lengthForecast}
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Cumulative Rainfall */}
// //         <div className="bg-white text-black rounded-lg p-6">
// //           <h3 className="text-xl font-bold text-teal-900 mb-4">
// //             Cumulative Rainfall
// //           </h3>
// //           <table className="w-full table-fixed border border-gray-300">
// //             <thead>
// //               <tr className="border-b">
// //                 <th className="p-2 bg-gray-200">PERIOD</th>
// //                 <th className="p-2 bg-gray-200">LTM (mm)</th>
// //                 <th className="p-2 bg-gray-200">2024 (mm)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr className="border-b">
// //                 <td className="p-2 text-center border">MAM</td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.rainfallLTM.mam}
// //                 </td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.rainfallForecast.mam}
// //                 </td>
// //               </tr>
// //               <tr className="border-b">
// //                 <td className="p-2 text-center border">AMJ</td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.rainfallLTM.amj}
// //                 </td>
// //                 <td className="p-2 text-center border">
// //                   {currentData.rainfallForecast.amj}
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //           <div className="mt-4">
// //             <h4 className="font-bold text-red-600">Advisories:</h4>
// //             <ul className="list-disc ml-5">
// //               <li>Harvest rainwater and store for irrigation.</li>
// //               <li>Cultivate early short cycle crops.</li>
// //               <li>Contact agricultural experts for information.</li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Dry Spells */}
// //         <div className="bg-white text-black rounded-lg p-6">
// //           <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center">
// //             <FaSun className="mr-2 text-yellow-500" /> Dry Spells
// //           </h3>
// //           <table className="w-full table-auto">
// //             <thead>
// //               <tr>
// //                 <th className="p-2 bg-gray-200">PERIOD</th>
// //                 <th className="p-2 bg-gray-200">LTM (Days)</th>
// //                 <th className="p-2 bg-gray-200">2024 (Days)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td className="p-2 text-center border-b border-gray-300">
// //                   EARLY (1st)
// //                 </td>
// //                 <td className="p-2 text-center border-b border-gray-300">
// //                   {currentData.drySpellsLTM.early}
// //                 </td>
// //                 <td className="p-2 text-center border-b border-gray-300">
// //                   {currentData.drySpellsForecast.early}
// //                 </td>
// //               </tr>
// //               <tr className="bg-gray-100">
// //                 <td className="p-2 text-center border-b border-gray-300">
// //                   LATE (2nd)
// //                 </td>
// //                 <td className="p-2 text-center border-b border-gray-300">
// //                   {currentData.drySpellsLTM.late}
// //                 </td>
// //                 <td className="p-2 text-center border-b border-gray-300">
// //                   {currentData.drySpellsForecast.late}
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //           <div className="mt-4">
// //             <h4 className="font-bold text-red-600">Advisories:</h4>
// //             <ul className="list-disc ml-5">
// //               <li>Plant cover crops or leguminous crops.</li>
// //               <li>Adopt mulching practices.</li>
// //               <li>Plant drought-resistant varieties of crops.</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Download Button */}
// //       <div className="mt-8 text-center">
// //         <button
// //           onClick={handleDownload}
// //           className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-full flex items-center justify-center"
// //         >
// //           <FaDownload className="mr-2" /> Download Forecast
// //         </button>
// //       </div>

// //       {/* Footer: Long-term Mean Explanation */}
// //       <div className="mt-8 text-center text-sm">
// //         <p>
// //           <span className="font-bold">Long term mean (LTM)</span> is the 30-year
// //           average condition of a given Zone from 1991-2020.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SeasonalForecast;

// import { useState } from "react";
// import { FaCloudSun, FaCloudRain, FaDownload, FaSun } from "react-icons/fa";
// import SON from "../assets/images/SON.png";

// const SeasonalForecast = () => {
//   const [selectedZone, setSelectedZone] = useState("East Coast");

//   // Data for different zones
//   const forecastData = {
//     "East Coast": {
//       startLTM: "1st Week of March - 3rd Week of April",
//       endLTM: "1st Week of July - 3rd Week of July",
//       lengthLTM: "91-112",
//       startForecast: "1st Week of March - 3rd Week of April",
//       endForecast: "1st Week of July - 2nd Week of July",
//       lengthForecast: "121-147",
//       rainfallLTM: { mam: "217-420", amj: "391-478" },
//       rainfallForecast: { mam: "283-430", amj: "346-580" },
//       drySpellsLTM: { early: 9, late: 13 },
//       drySpellsForecast: { early: 10, late: "14-18" },
//     },
//     "West Coast": {
//       startLTM: "2nd Week of March - 4th Week of April",
//       endLTM: "2nd Week of July - 4th Week of July",
//       lengthLTM: "92-115",
//       startForecast: "2nd Week of March - 4th Week of April",
//       endForecast: "2nd Week of July - 3rd Week of July",
//       lengthForecast: "120-140",
//       rainfallLTM: { mam: "200-400", amj: "380-460" },
//       rainfallForecast: { mam: "270-420", amj: "320-550" },
//       drySpellsLTM: { early: 10, late: 14 },
//       drySpellsForecast: { early: 12, late: "15-20" },
//     },
//     "Forest Zone": {
//       startLTM: "1st Week of April - 3rd Week of April",
//       endLTM: "1st Week of August - 3rd Week of August",
//       lengthLTM: "105-130",
//       startForecast: "1st Week of April - 4th Week of April",
//       endForecast: "1st Week of August - 2nd Week of August",
//       lengthForecast: "115-135",
//       rainfallLTM: { mam: "250-470", amj: "400-500" },
//       rainfallForecast: { mam: "300-500", amj: "420-590" },
//       drySpellsLTM: { early: 11, late: 12 },
//       drySpellsForecast: { early: 11, late: "14-16" },
//     },
//     "Transitional Zone": {
//       startLTM: "2nd Week of March - 2nd Week of April",
//       endLTM: "1st Week of August - 4th Week of August",
//       lengthLTM: "110-140",
//       startForecast: "2nd Week of March - 2nd Week of April",
//       endForecast: "1st Week of August - 3rd Week of August",
//       lengthForecast: "120-150",
//       rainfallLTM: { mam: "280-450", amj: "420-510" },
//       rainfallForecast: { mam: "320-490", amj: "460-600" },
//       drySpellsLTM: { early: 12, late: 13 },
//       drySpellsForecast: { early: 12, late: "15-17" },
//     },
//     // Additional zones can be added here
//   };

//   const currentData = forecastData[selectedZone];

//   const handleDownload = () => {
//     // Logic for downloading the forecast (PDF, CSV, etc.)
//     console.log("Download initiated");
//   };

//   return (
//     <div className="container mx-auto p-6 bg-teal-900 text-white">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">{selectedZone} (MAM & AMJ)</h1>
//         <p className="text-xl text-yellow-400">
//           NORMAL ONSET AND EARLY CESSATION
//         </p>
//       </div>

//       {/* Zone Selection */}
//       <div className="flex justify-center mb-6">
//         <select
//           value={selectedZone}
//           onChange={(e) => setSelectedZone(e.target.value)}
//           className="text-black p-2 rounded-md"
//         >
//           {Object.keys(forecastData).map((zone) => (
//             <option key={zone} value={zone}>
//               {zone}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Map Section */}
//         <div className="bg-white text-black rounded-lg p-4">
//           <img
//             src={SON}
//             alt="Map"
//             className="w-full h-auto mb-4 max-w-xs mx-auto"
//           />
//         </div>

//         {/* LTM and Forecast Table */}
//         <div className="bg-white text-black rounded-lg p-6">
//           <table className="w-full table-fixed border border-gray-300">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-2 bg-gray-200 border text-center">LTM</th>
//                 <th className="p-2 bg-gray-200 border text-center">
//                   2024 Forecast
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">Start</td>
//                 <td className="p-2 text-center border">
//                   {currentData.startLTM}
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.startForecast}
//                 </td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">End</td>
//                 <td className="p-2 text-center border">{currentData.endLTM}</td>
//                 <td className="p-2 text-center border">
//                   {currentData.endForecast}
//                 </td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">
//                   Length of Season (Days)
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.lengthLTM}
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.lengthForecast}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Cumulative Rainfall */}
//         <div className="bg-white text-black rounded-lg p-6">
//           <h3 className="text-xl font-bold text-teal-900 mb-4">
//             Cumulative Rainfall
//           </h3>
//           <table className="w-full table-fixed border border-gray-300">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-2 bg-gray-200">PERIOD</th>
//                 <th className="p-2 bg-gray-200">LTM (mm)</th>
//                 <th className="p-2 bg-gray-200">2024 (mm)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">MAM</td>
//                 <td className="p-2 text-center border">
//                   {currentData.rainfallLTM.mam}
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.rainfallForecast.mam}
//                 </td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">AMJ</td>
//                 <td className="p-2 text-center border">
//                   {currentData.rainfallLTM.amj}
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.rainfallForecast.amj}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="mt-4">
//             <h4 className="font-bold text-red-600">Advisories:</h4>
//             <ul className="list-disc ml-5">
//               <li>Harvest rainwater and store for irrigation.</li>
//               <li>Cultivate early short cycle crops.</li>
//               <li>Contact agricultural experts for information.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Dry Spells */}
//         <div className="bg-white text-black rounded-lg p-6">
//           <h3 className="text-xl font-bold text-teal-900 mb-4">Dry Spells</h3>
//           <table className="w-full table-fixed border border-gray-300">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-2 bg-gray-200">PERIOD</th>
//                 <th className="p-2 bg-gray-200">LTM</th>
//                 <th className="p-2 bg-gray-200">2024</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">Early Spell</td>
//                 <td className="p-2 text-center border">
//                   {currentData.drySpellsLTM.early}
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.drySpellsForecast.early}
//                 </td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2 text-center border">Late Spell</td>
//                 <td className="p-2 text-center border">
//                   {currentData.drySpellsLTM.late}
//                 </td>
//                 <td className="p-2 text-center border">
//                   {currentData.drySpellsForecast.late}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Download Button */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={handleDownload}
//           className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400"
//         >
//           <FaDownload className="mr-2" /> Download Forecast
//         </button>
//       </div>

//       {/* Footer Section */}
//       <footer className="text-center mt-10 text-gray-300">
//         <p>&copy; 2024 Seasonal Forecast. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default SeasonalForecast;

import { useState } from "react";
import { FaCloudSun, FaCloudRain, FaDownload, FaSun } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import SON from "../assets/images/SON.png"; // Ensure this image path is correct

const SeasonalForecast = () => {
  const [selectedZone, setSelectedZone] = useState("East Coast");

  // Data for different agro-ecological zones
  const forecastData = {
    "East Coast": {
      startLTM: "1st Week of March - 3rd Week of April",
      endLTM: "1st Week of July - 3rd Week of July",
      lengthLTM: "91-112 days",
      startForecast: "1st Week of March - 3rd Week of April",
      endForecast: "1st Week of July - 2nd Week of July",
      lengthForecast: "121-147 days",
      rainfallLTM: { mam: "217-420 mm", amj: "391-478 mm" },
      rainfallForecast: { mam: "283-430 mm", amj: "346-580 mm" },
      drySpellsLTM: { early: 9, late: 13 },
      drySpellsForecast: { early: 10, late: "14-18" },
    },
    "West Coast": {
      startLTM: "1st Week of March - 2nd Week of April",
      endLTM: "3rd Week of July - 1st Week of August",
      lengthLTM: "95-115 days",
      startForecast: "1st Week of March - 2nd Week of April",
      endForecast: "1st Week of August - 2nd Week of August",
      lengthForecast: "125-140 days",
      rainfallLTM: { mam: "250-430 mm", amj: "390-510 mm" },
      rainfallForecast: { mam: "320-460 mm", amj: "360-600 mm" },
      drySpellsLTM: { early: 8, late: 10 },
      drySpellsForecast: { early: 12, late: "10-15" },
    },
    "Central Region": {
      startLTM: "2nd Week of March - 1st Week of April",
      endLTM: "1st Week of July - 2nd Week of August",
      lengthLTM: "92-115 days",
      startForecast: "2nd Week of March - 1st Week of April",
      endForecast: "1st Week of August - 3rd Week of August",
      lengthForecast: "130-145 days",
      rainfallLTM: { mam: "230-420 mm", amj: "400-500 mm" },
      rainfallForecast: { mam: "290-450 mm", amj: "370-590 mm" },
      drySpellsLTM: { early: 7, late: 12 },
      drySpellsForecast: { early: 9, late: "12-16" },
    },
    "North Region": {
      startLTM: "3rd Week of March - 1st Week of April",
      endLTM: "1st Week of July - 2nd Week of July",
      lengthLTM: "90-115 days",
      startForecast: "3rd Week of March - 1st Week of April",
      endForecast: "2nd Week of July - 3rd Week of July",
      lengthForecast: "120-135 days",
      rainfallLTM: { mam: "210-400 mm", amj: "380-490 mm" },
      rainfallForecast: { mam: "260-430 mm", amj: "320-550 mm" },
      drySpellsLTM: { early: 10, late: 11 },
      drySpellsForecast: { early: 11, late: "10-14" },
    },
    "South Region": {
      startLTM: "1st Week of April - 2nd Week of May",
      endLTM: "3rd Week of July - 2nd Week of August",
      lengthLTM: "95-120 days",
      startForecast: "1st Week of April - 3rd Week of May",
      endForecast: "3rd Week of July - 4th Week of July",
      lengthForecast: "125-150 days",
      rainfallLTM: { mam: "240-420 mm", amj: "390-490 mm" },
      rainfallForecast: { mam: "310-450 mm", amj: "400-610 mm" },
      drySpellsLTM: { early: 9, late: 10 },
      drySpellsForecast: { early: 8, late: "14-16" },
    },
  };

  const currentData = forecastData[selectedZone];

  const handleDownload = () => {
    const forecastText = `
    Seasonal Forecast for ${selectedZone}:
    - Start (LTM): ${currentData.startLTM}
    - End (LTM): ${currentData.endLTM}
    - Rainfall MAM: ${currentData.rainfallLTM.mam} | Forecast: ${currentData.rainfallForecast.mam}
    - Dry Spells Early: ${currentData.drySpellsLTM.early} | Forecast: ${currentData.drySpellsForecast.early}
    `;

    const blob = new Blob([forecastText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedZone}_forecast.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container mx-auto p-6 bg-teal-900 text-white pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{selectedZone} Forecast</h1>
        <p className="text-xl text-yellow-400">
          NORMAL ONSET AND EARLY CESSATION
        </p>
      </div>

      {/* Zone Selection */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedZone}
          onChange={(e) => setSelectedZone(e.target.value)}
          className="text-black p-2 rounded-md"
        >
          {Object.keys(forecastData).map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Section */}
        <div className="bg-white text-black rounded-lg p-4">
          <img
            src={SON}
            alt="Agro-Ecological Zones Map"
            className="w-full h-auto mb-4 max-w-xs mx-auto"
          />
        </div>

        {/* LTM and Forecast Table */}
        <div className="bg-white text-black rounded-lg p-6">
          <GiWaterDrop className="inline text-blue-500 mr-2" />
          <GiWaterDrop className="inline text-blue-500 mr-2" />
          <table className="w-full table-fixed border border-gray-300">
            <thead>
              <tr className="border-b">
                <th className="p-2 bg-gray-200 border text-center"></th>
                <th className="p-2 bg-gray-200 border text-center">LTM</th>

                <th className="p-2 bg-gray-200 border text-center">
                  2024 Forecast
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 text-center border">Start</td>
                <td className="p-2 text-center border">
                  {currentData.startLTM}
                </td>
                <td className="p-2 text-center border">
                  {currentData.startForecast}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 text-center border">End</td>
                <td className="p-2 text-center border">{currentData.endLTM}</td>
                <td className="p-2 text-center border">
                  {currentData.endForecast}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 text-center border">
                  Length of Season (Days)
                </td>
                <td className="p-2 text-center border">
                  {currentData.lengthLTM}
                </td>
                <td className="p-2 text-center border">
                  {currentData.lengthForecast}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Rainfall Table */}
        <div className="bg-white text-black rounded-lg p-6">
          <h3 className="text-xl font-bold text-teal-900 mb-4">
            <FaCloudRain className="inline text-blue-500 mr-2" />
            Rainfall Forecast
          </h3>
          <table className="w-full table-fixed border border-gray-300">
            <thead>
              <tr className="border-b">
                <th className="p-2 bg-gray-200">Season</th>
                <th className="p-2 bg-gray-200">LTM</th>
                <th className="p-2 bg-gray-200">2024 Forecast</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 text-center border">MAM</td>
                <td className="p-2 text-center border">
                  {currentData.rainfallLTM.mam}
                </td>
                <td className="p-2 text-center border">
                  {currentData.rainfallForecast.mam}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 text-center border">AMJ</td>
                <td className="p-2 text-center border">
                  {currentData.rainfallLTM.amj}
                </td>
                <td className="p-2 text-center border">
                  {currentData.rainfallForecast.amj}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4 className="font-bold text-red-600">Advisories:</h4>
            <ul className="list-disc ml-5">
              <li>Monitor weather updates regularly.</li>
              <li>Prepare for potential irrigation needs.</li>
              <li>Consult with local agronomists for crop management.</li>
            </ul>
          </div>
        </div>

        {/* Dry Spells Table */}
        <div className="bg-white text-black rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaSun
              className="text-orange-500 mr-2"
              style={{ fontSize: "1.5rem" }}
            />{" "}
            {/* Adjusted icon size */}
            <h3 className="text-xl font-bold text-teal-900">Dry Spells</h3>
          </div>
          <table className="w-full table-fixed border border-gray-300">
            <thead>
              <tr className="border-b">
                <th className="p-2 bg-gray-200">TYPE</th>
                <th className="p-2 bg-gray-200">LTM</th>
                <th className="p-2 bg-gray-200">2024 Forecast</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 text-center border">Early</td>
                <td className="p-2 text-center border">
                  {currentData.drySpellsLTM.early}
                </td>
                <td className="p-2 text-center border">
                  {currentData.drySpellsForecast.early}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 text-center border">Late</td>
                <td className="p-2 text-center border">
                  {currentData.drySpellsLTM.late}
                </td>
                <td className="p-2 text-center border">
                  {currentData.drySpellsForecast.late}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            <h4 className="font-bold text-red-600">Advisories:</h4>
            <ul className="list-disc ml-5">
              <li>Monitor weather updates regularly.</li>
              <li>Prepare for potential irrigation needs.</li>
              <li>Consult with local agronomists for crop management.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleDownload}
          className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400"
        >
          <FaDownload className="mr-2" /> Download Forecast
        </button>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-10 text-gray-300">
        <p>&copy; 2024 Seasonal Forecast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SeasonalForecast;
