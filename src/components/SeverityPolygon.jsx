import { Polygon, Popup, Tooltip } from "react-leaflet";

const SeverityPolygon = ({ coordinates, severity, message }) => {
  const severityColors = {
    low: "#00ff00", // Light rain
    medium: "#ffff00", // Moderate rain
    high: "#ff0000", // Heavy rain
  };

  return (
    <Polygon
      positions={coordinates}
      pathOptions={{
        color: "blue", // Border color
        fillColor: severityColors[severity], // Color based on severity
        fillOpacity: 0.5, // Transparency
      }}
    >
      {/* Popup with more information */}
      <Popup>
        <div>
          <p>{message}</p>
        </div>
      </Popup>

      {/* Tooltip on hover */}
      <Tooltip>
        <span>{severity.toUpperCase()} Severity Zone</span>
      </Tooltip>
    </Polygon>
  );
};

export default SeverityPolygon;
