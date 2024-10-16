// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Forecast from "./pages/Forecast";
// import Climate from "./pages/Climate";
// import About from "./pages/About";
// import CropCalendar from "./pages/CropCalendar";
// import Weather from "./pages/Weather";
// import NewsUpdates from "./pages/NewsUpdates";
// import SeasonalForecast from "./pages/SeasonalForecast";
// import FiveDaysForecast from "./pages/FiveDaysForecast";
// import SevenDaysForecast from "./pages/SevenDaysForecast";
// import AgroBulletins from "./pages/AgroBulletins";
// import FloodDrought from "./pages/FloodDrought";
// import SubseasonalForecast from "./pages/SubseasonalForecast";
// import MonthlyForecast from "./pages/MonthlyForecast";
// import ClimateReport from "./pages/Climate";
// import PoultryCalendar from "./pages/PoultryCalendar";
// import BlogGmetVisit from "./blog/BlogGmetVisit";
// import BlogNationalAssemblyVisit from "./blog/BlogNationalAssemblyVisit";
// import BlogSonForecast from "./blog/BlogSonForecast";
// import PoultryAdvisory from "./pages/PoultryAdvisory";
// import CropAdvisory from "./pages/CropAdvisory";
// import NotFound from "./components/NotFound";
// import EventClimateReportRelease from "./events/EventClimateReportRelease";
// import EventMajorSeasonCropCalendar from "./events/EventMajorSeasonCropCalendar";
// import EventPoultryCalendar from "./events/EventPoultryCalendar";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/forecast" element={<Forecast />} />
//             <Route path="/climate" element={<Climate />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/weather" element={<Weather />} />
//             <Route path="/crop-calendar" element={<CropCalendar />} />
//             <Route path="/news" element={<NewsUpdates />} />
//             <Route path="/5-days-forecast" element={<FiveDaysForecast />} />
//             <Route path="/7-days-forecast" element={<SevenDaysForecast />} />
//             <Route path="/agro-bulletins" element={<AgroBulletins />} />
//             <Route path="/flood-drought" element={<FloodDrought />} />
//             <Route
//               path="/subseasonal-forecast"
//               element={<SubseasonalForecast />}
//             />
//             <Route path="/monthly-forecast" element={<MonthlyForecast />} />
//             <Route path="/climate-report" element={<ClimateReport />} />
//             <Route path="/poultry-calendar" element={<PoultryCalendar />} />
//             <Route path="/seasonal-forecast" element={<SeasonalForecast />} />
//             <Route path="/blog/gmet-visit" element={<BlogGmetVisit />} />
//             <Route
//               path="/blog/national-assembly-visit"
//               element={<BlogNationalAssemblyVisit />}
//             />
//             <Route path="/blog/son-forecast" element={<BlogSonForecast />} />
//             <Route
//               path="/events/crop-calen"
//               element={<EventMajorSeasonCropCalendar />}
//             />
//             <Route
//               path="/events/poult-calendar"
//               element={<EventPoultryCalendar />}
//             />
//             <Route
//               path="/events/clim-rep-rel"
//               component={<EventClimateReportRelease />}
//             />
//             <Route path="/poultry-advisory" element={<PoultryAdvisory />} />
//             <Route path="/crop-advisory" element={<CropAdvisory />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Climate from "./pages/Climate";
import About from "./pages/About";
import CropCalendar from "./pages/CropCalendar";
import Weather from "./pages/Weather";
import NewsUpdates from "./pages/NewsUpdates";
import SeasonalForecast from "./pages/SeasonalForecast";
import FiveDaysForecast from "./pages/FiveDaysForecast";
import SevenDaysForecast from "./pages/SevenDaysForecast";
import AgroBulletins from "./pages/AgroBulletins";
import FloodDrought from "./pages/FloodDrought";
import SubseasonalForecast from "./pages/SubseasonalForecast";
import MonthlyForecast from "./pages/MonthlyForecast";
import ClimateReport from "./pages/Climate";
import PoultryCalendar from "./pages/PoultryCalendar";
import BlogGmetVisit from "./blog/BlogGmetVisit";
import BlogNationalAssemblyVisit from "./blog/BlogNationalAssemblyVisit";
import BlogSonForecast from "./blog/BlogSonForecast";
import PoultryAdvisory from "./pages/PoultryAdvisory";
import CropAdvisory from "./pages/CropAdvisory";
import NotFound from "./components/NotFound";
import EventClimateReportRelease from "./events/EventClimateReportRelease";
import EventMajorSeasonCropCalendar from "./events/EventMajorSeasonCropCalendar";
import EventPoultryCalendar from "./events/EventPoultryCalendar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/climate" element={<Climate />} />
            <Route path="/about" element={<About />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/crop-calendar" element={<CropCalendar />} />
            <Route path="/news" element={<NewsUpdates />} />
            <Route path="/5-days-forecast" element={<FiveDaysForecast />} />
            <Route path="/7-days-forecast" element={<SevenDaysForecast />} />
            <Route path="/agro-bulletins" element={<AgroBulletins />} />
            <Route path="/flood-drought" element={<FloodDrought />} />
            <Route
              path="/subseasonal-forecast"
              element={<SubseasonalForecast />}
            />
            <Route path="/monthly-forecast" element={<MonthlyForecast />} />
            <Route path="/climate-report" element={<ClimateReport />} />
            <Route path="/poultry-calendar" element={<PoultryCalendar />} />
            <Route path="/seasonal-forecast" element={<SeasonalForecast />} />
            <Route path="/blog/gmet-visit" element={<BlogGmetVisit />} />
            <Route
              path="/blog/national-assembly-visit"
              element={<BlogNationalAssemblyVisit />}
            />
            <Route path="/blog/son-forecast" element={<BlogSonForecast />} />
            <Route
              path="/events/crop-calen"
              element={<EventMajorSeasonCropCalendar />}
            />
            <Route
              path="/events/poult-calendar"
              element={<EventPoultryCalendar />}
            />
            {/* Corrected this part */}
            <Route
              path="/events/clim-rep-rel"
              element={<EventClimateReportRelease />}
            />
            <Route path="/poultry-advisory" element={<PoultryAdvisory />} />
            <Route path="/crop-advisory" element={<CropAdvisory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
