import {
  FaSeedling,
  FaSun,
  FaWater,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const CropAdvisory = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-24">
      {/* Main Container with max width */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Crop Advisory for Ghana
          </h1>
          <p className="text-gray-700 text-lg">
            Stay informed about the best practices for crop production in
            Ghana’s tropical climate. Get advice on soil preparation,
            irrigation, pest control, and planting based on the local crop
            calendar.
          </p>
        </div>

        {/* Seasonal Crop Advisory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Season: Major Rainy Season */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaSeedling className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Major Rainy Season, Southern Ghana (March - July)
            </h2>
            <p className="text-gray-700">
              Recommended crops: Maize, Rice, Cassava. The start of the major
              rainy season is the optimal time to plant maize and rice. Ensure
              proper land preparation and consider organic fertilizers.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaSeedling className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Northern Rainy Season (May - October)
            </h2>
            <p className="text-gray-700">
              Recommended crops: Maize, Rice, Sorghum, Cowpea, Peanut, Soyabean.
              The start of the major rainy season is the optimal time to plant
              maize and rice. Ensure proper land preparation and consider
              organic fertilizers.
            </p>
          </div>

          {/* Season: Minor Rainy Season */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaWater className="text-blue-500 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Minor Rainy Season (September - November)
            </h2>
            <p className="text-gray-700">
              Recommended crops: Vegetables (Tomatoe, Pepper), Groundnut, Yam.
              Take advantage of the shorter rainy season to plant vegetables and
              short-cycle crops like groundnuts and yams.
            </p>
          </div>

          {/* Season: Dry Season */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaSun className="text-yellow-500 text-3xl mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Dry Season (December - March)
            </h2>
            <p className="text-gray-700">
              Recommended tasks: Irrigation for vegetables (onion, carrot), Land
              preparation for the next rainy season. Use irrigation systems
              during the dry season to sustain vegetable growth.
            </p>
          </div>
        </div>

        {/* Crop Calendar Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
            Crop Calendar for Ghana
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Month 1 */}
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <FaCalendarAlt className="text-blue-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-700">April</h3>
                <p className="text-gray-600 text-sm">
                  Begin planting maize, rice, and cassava with the onset of the
                  major rainy season.
                </p>
              </div>

              {/* Month 2 */}
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <FaCalendarAlt className="text-blue-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-700">May</h3>
                <p className="text-gray-600 text-sm">
                  Continue planting and monitor the growth of maize and rice
                  crops. Apply fertilizers.
                </p>
              </div>

              {/* Month 3 */}
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <FaCalendarAlt className="text-blue-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-700">June</h3>
                <p className="text-gray-600 text-sm">
                  Continue crop management (weeding, pest control) for maize and
                  rice fields.
                </p>
              </div>

              {/* Month 4 */}
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <FaCalendarAlt className="text-blue-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-700">July</h3>
                <p className="text-gray-600 text-sm">
                  Begin harvesting early maize. Ensure proper storage to avoid
                  post-harvest losses.
                </p>
              </div>

              {/* Additional months follow the same format */}
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Need More Advice?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to our agricultural experts for personalized advice
            tailored to Ghana climate and your specific region.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          {/* Call Button */}

          <a
            href="tel:+2330243999631" // Replace with the expert's actual phone number
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex items-center gap-2"
          >
            <FaPhoneAlt />
            Call an Expert
          </a>

          {/* Email Button */}
          <a
            href="mailto:stephen.amankwah@meteo.gov.gh" // Replace with the expert's actual email address
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex items-center gap-2"
          >
            <FaEnvelope />
            Email an Expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;
