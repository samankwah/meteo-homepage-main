import { FaEgg, FaHome, FaLeaf, FaSyringe, FaChartLine } from "react-icons/fa";

const PoultryAdvisory = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-24">
      {/* Main Container with max width */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Poultry Advisory
          </h1>
          <p className="text-gray-700 text-lg">
            Get expert advice on all aspects of poultry production, from feeding
            and housing to disease control and market trends.
          </p>
        </div>

        {/* Advisory Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feeding Advice */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaLeaf className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Feeding Practices
            </h2>
            <p className="text-gray-700">
              Ensure a balanced diet with proper nutrition to maximize egg
              production and growth. Use high-quality feed with protein,
              vitamins, and minerals.
            </p>
          </div>

          {/* Housing */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaHome className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Housing Requirements
            </h2>
            <p className="text-gray-700">
              Provide well-ventilated and spacious housing for your poultry.
              Ensure the coop is clean and protected from extreme weather
              conditions.
            </p>
          </div>

          {/* Disease Control */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaSyringe className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Disease Control
            </h2>
            <p className="text-gray-700">
              Regular vaccinations and hygiene are key to preventing common
              poultry diseases like Newcastle, coccidiosis, and bird flu.
            </p>
          </div>

          {/* Egg Production */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaEgg className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Maximizing Egg Production
            </h2>
            <p className="text-gray-700">
              Maintain a consistent light schedule and provide adequate calcium
              in the diet to optimize egg production.
            </p>
          </div>

          {/* Market Trends */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaChartLine className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Market Trends
            </h2>
            <p className="text-gray-700">
              Stay updated on the latest poultry market trends, including demand
              for eggs and meat, and price fluctuations in feed.
            </p>
          </div>

          {/* Environmental Impact */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaLeaf className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Sustainable Practices
            </h2>
            <p className="text-gray-700">
              Implement sustainable practices such as waste recycling and
              energy-efficient systems to reduce environmental impact.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Key Poultry Production Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-4xl font-bold text-blue-800">500K</p>
              <p className="text-gray-600">Chickens Produced Annually</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-4xl font-bold text-blue-800">85%</p>
              <p className="text-gray-600">Egg Production Efficiency</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-4xl font-bold text-blue-800">60%</p>
              <p className="text-gray-600">Disease Prevention Success</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Need More Advice?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our experts for personalized advice or explore our resources
            for further guidance on poultry farming.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
            Contact an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoultryAdvisory;
