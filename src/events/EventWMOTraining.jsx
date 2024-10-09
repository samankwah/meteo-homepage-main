const EventWMOTraining = () => {
  return (
    <div className="p-8 pt-20">
      {" "}
      {/* Added padding-top to prevent navbar overlap */}
      <h1 className="text-3xl font-bold mb-4">
        WMO Satellite Training on Meteosat Third Generation (MTG)
      </h1>
      <p className="text-gray-700 mb-4">
        The World Meteorological Organization (WMO) is hosting a specialized
        satellite training course focusing on the{" "}
        <strong>Meteosat Third Generation (MTG)</strong> system. This training
        is designed for meteorologists, climate scientists, and satellite data
        analysts who seek to enhance their skills in satellite-based observation
        and analysis.
      </p>
      <p className="text-gray-700 mb-4">
        The Meteosat Third Generation (MTG) satellites represent a significant
        advancement in meteorological observation, featuring improved accuracy
        and resolution in weather forecasting and climate monitoring.
        Participants will learn how to leverage the MTG data for real-time
        weather forecasting, disaster management, and climate-related
        decision-making.
      </p>
      <p className="text-gray-700 mb-4">
        The course will cover the following key areas:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Introduction to the MTG satellite system and its applications</li>
        <li>Hands-on training with real-time MTG data analysis tools</li>
        <li>Best practices in satellite-based climate data interpretation</li>
        <li>Advanced techniques in weather forecasting using MTG</li>
        <li>Disaster management and climate adaptation strategies</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Experts from the WMO and leading meteorological institutions will
        conduct the sessions, offering both theoretical knowledge and practical
        demonstrations. Participants will also have access to case studies that
        demonstrate the impact of satellite data on improving weather forecasts
        and managing climate risks.
      </p>
      <p className="text-sm text-gray-500">
        <strong>Date:</strong> 20 Nov 2024 - 24 Nov 2024
      </p>
      <p className="text-sm text-gray-500">
        <strong>Venue:</strong> WMO Training Center, Geneva, Switzerland
      </p>
      <p className="text-sm text-gray-500">
        <strong>Organizer:</strong> World Meteorological Organization (WMO)
      </p>
      {/* Add more event details or registration links as needed */}
    </div>
  );
};

export default EventWMOTraining;
