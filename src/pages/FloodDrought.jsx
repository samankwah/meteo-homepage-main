import { FaDownload } from "react-icons/fa";

const FloodDrought = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 pt-20">
        <h1 className="text-blue-900 text-4xl font-bold mb-4 text-center">
          Flood and Drought Monitoring
        </h1>
        <p className="text-md text-gray-700 text-center mb-12">
          Stay updated with the latest information on flood and drought
          conditions in your region.
        </p>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">
              Flood Alerts
            </h2>
            <p className="text-gray-600">
              Stay informed about current flood alerts and safety measures in
              your area.
            </p>
            <a
              href="/path/to/flood-alerts"
              className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
            >
              Learn More
            </a>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">
              Drought Conditions
            </h2>
            <p className="text-gray-600">
              Get insights on ongoing drought conditions and their impact on
              agriculture.
            </p>
            <a
              href="/path/to/drought-conditions"
              className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
            >
              Learn More
            </a>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">
              Resources
            </h2>
            <p className="text-gray-600">
              Access resources and tips for flood and drought preparedness.
            </p>
            <a
              href="/path/to/resources"
              className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-blue-50 p-2 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8">
            Download Reports
          </h2>
          <p className="text-gray-600 mb-8">
            Access detailed reports on flood and drought conditions.
          </p>
          <a
            href="/path/to/report.pdf"
            download
            className="bg-blue-900 text-white px-3 py-2 rounded inline-flex items-center justify-center hover:bg-blue-700 transition duration-200"
          >
            <FaDownload className="mr-2" />
            Download Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloodDrought;
