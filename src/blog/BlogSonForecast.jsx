import sonForecastImage from "../assets/images/image3.png";

const BlogSonForecast = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-0 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Blog Header */}
      <header className="mb-12">
        {/* Featured Image */}
        <div className="relative mb-8">
          <img
            src={sonForecastImage}
            alt="Release of the SON Seasonal Forecast"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="absolute top-4 left-4 bg-yellow-600 text-white px-4 py-2 rounded-md shadow-lg">
            <p className="text-xs font-semibold uppercase">Seasonal Forecast</p>
          </div>
        </div>

        {/* Title, Author, and Date */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            Release of the SON (September - November) Seasonal Forecast
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            Published on September 10, 2024 by{" "}
            <span className="font-semibold text-gray-700">GMet Team</span>
          </p>
        </div>
      </header>

      {/* Blog Content */}
      <article className="leading-relaxed text-lg text-gray-700 mb-8">
        <p className="mb-6">
          The Ghana Meteorological Agency (GMet) has officially released the
          **SON (September - November)** seasonal forecast, providing crucial
          insights into the expected weather patterns across the country for the
          upcoming months. This forecast aims to assist farmers, policymakers,
          and the general public in preparing for the changing weather
          conditions.
        </p>

        <p className="mb-6">
          The SON period represents the tail end of the major rainy season in
          southern Ghana and the transition to the dry season in the northern
          parts of the country. According to GMet forecast, **above-average
          rainfall** is expected in parts of the Southern and Middle Belt,
          particularly in the **Ashanti, Eastern, and Western regions**, while
          the northern regions will experience relatively dry conditions with
          isolated showers.
        </p>

        <p className="mb-6">
          GMet’s forecast has been compiled using advanced meteorological data
          from satellite systems, ground stations, and weather models. The
          Agency emphasized the potential impact of this seasonal forecast on
          agricultural activities, public safety, and disaster management. The
          public is encouraged to stay informed about updates as the weather can
          change rapidly during this period.
        </p>

        {/* Key Points */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 px-6 py-4 my-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
            Key Insights from the SON Forecast
          </h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="mb-2">
              **Above-average rainfall** is expected in the Southern Belt,
              including Greater Accra and Volta regions.
            </li>
            <li className="mb-2">
              **Isolated showers** are likely in the Northern parts of Ghana,
              while the Middle Belt will experience a mix of dry and wet spells.
            </li>
            <li className="mb-2">
              Farmers in the south are advised to prepare for possible
              **flooding** in low-lying areas.
            </li>
            <li className="mb-2">
              The public is encouraged to stay updated on potential **storm
              warnings** and weather advisories.
            </li>
          </ul>
        </div>

        <p className="mb-6">
          Furthermore, GMet stressed the importance of using weather forecasts
          to support agricultural planning, especially for farmers in the
          southern regions. These forecasts will help farmers adjust their
          planting schedules and choose the right crops for the expected
          rainfall patterns.
        </p>

        <blockquote className="border-l-4 border-yellow-600 italic text-yellow-700 px-4 py-2 my-6">
          We urge the public to take this forecast seriously and make necessary
          preparations for the season ahead. The right decisions can minimize
          the risks posed by heavy rainfall or drought, stated Dr. Kofi Owusu,
          Director-General of GMet.
        </blockquote>

        <p className="mb-6">
          The forecast also serves as a reminder for emergency services to be on
          high alert for potential **flooding**, particularly in urban areas
          where drainage systems may be overwhelmed by heavy rains.
        </p>
      </article>

      {/* Call-to-Action (Optional) */}
      <div className="bg-blue-50 border-l-4 border-blue-600 px-6 py-4 mb-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Stay Informed on Weather Alerts
        </h2>
        <p className="text-gray-700">
          Keep up with real-time weather updates and seasonal forecasts from
          GMet by following our official channels.
        </p>
      </div>

      {/* Related Articles Section */}
      <section className="border-t border-gray-200 pt-6">
        <h3 className="text-3xl font-semibold text-blue-800 mb-6">
          Related Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Related Article Item */}
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              How to Prepare for Heavy Rainfall in Ghana
            </h4>
            <p className="text-gray-600 mb-4">
              Learn about the measures you can take to protect your property
              during the rainy season.
            </p>
            <a href="/" className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              GMet Role in Disaster Preparedness
            </h4>
            <p className="text-gray-600 mb-4">
              Discover how GMet helps Ghana prepare for extreme weather events
              and natural disasters.
            </p>
            <a href="/" className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Seasonal Forecasting Explained
            </h4>
            <p className="text-gray-600 mb-4">
              Understand the science behind seasonal forecasting and its impact
              on agriculture and daily life.
            </p>
            <a href="/" className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSonForecast;
