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
import EventWMOTraining from "./events/EventWMOTraining";
import EventClimateDataTraining from "./events/EventClimateDataTraining";
import EventWorldMetDay from "./events/EventWorldMetDay";

function App() {
  return (
    <Router>
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
            <Route path="/events/wmo-training" element={<EventWMOTraining />} />
            <Route
              path="/events/climate-data-training"
              element={<EventClimateDataTraining />}
            />
            <Route
              path="/events/world-met-day"
              element={<EventWorldMetDay />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
