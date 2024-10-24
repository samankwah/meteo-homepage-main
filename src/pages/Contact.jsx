import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 5.6037,
  lng: -0.187,
};

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            We are here to help! Reach out to us with any inquiries, feedback,
            or support requests.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              You can also contact us through the following means:
            </p>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-blue-900 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-700">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    123 Climate Street, Accra, Ghana
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <FaPhoneAlt className="h-6 w-6 text-blue-900 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-700">Phone</h3>
                  <p className="text-gray-600">+233 24 399 9631</p>
                  <p className="text-gray-600">+233 30 000 0000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-blue-900 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-700">Email</h3>
                  <p className="text-gray-600">info@weatherapp.com</p>
                  <p className="text-gray-600">support@weatherapp.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Find Us on the Map
          </h2>
          <div className="bg-gray-300 rounded-lg h-64">
            {/* Google Maps Integration */}
            <LoadScript
              googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
