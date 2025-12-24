import React from "react";

// --- CSS-in-JS Styles for Card Component ---
const cardStyles = {
  // Card styles
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    marginBottom: "35px",
    padding: "30px",
    transition: "all 0.3s ease",
  },
  h2: {
    color: "#1abc9c", // Teal/Aqua (Accent Color)
    borderBottom: "2px solid #1abc9c",
    paddingBottom: "10px",
    marginTop: "0",
  },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "25px",
  },
  // Location Info styles
  locationInfo: {
    backgroundColor: "#e8f6f3", // Very light Teal background
    padding: "20px",
    borderRadius: "8px",
    borderLeft: "4px solid #1b4f72", // Deep Blue
  },
  locationH3: {
    color: "#1b4f72",
    marginTop: "0",
    fontSize: "1.3em",
    marginBottom: "15px",
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  li: {
    marginBottom: "10px",
    paddingLeft: "25px",
    position: "relative",
  },
  liIcon: {
    position: "absolute",
    left: "0",
    fontSize: "1.2em",
    color: "#1abc9c",
  },
};

/**
 * Reusable component to display a single Dehradun destination.
 * @param {object} props - Component properties.
 * @param {string} props.name - Name of the place.
 * @param {string} props.description - Description of the place.
 * @param {string} props.location - General location/area.
 * @param {string} props.distanceISBT - Distance from ISBT Dehradun.
 */
const DestinationCard = ({ name, description, location, distanceISBT }) => (
  <div style={cardStyles.card}>
    <h2 style={cardStyles.h2}>{name}</h2>
    <div style={cardStyles.detailsGrid}>
      <div className="description">
        <p>{description}</p>
      </div>
      <div style={cardStyles.locationInfo}>
        <h3 style={cardStyles.locationH3}>Travel Details</h3>
        <ul style={cardStyles.ul}>
          <li style={cardStyles.li}>
            <span style={cardStyles.liIcon}>📍</span>
            <strong>Location:</strong> {location}
          </li>
          <li style={cardStyles.li}>
            <span style={cardStyles.liIcon}>🛣️</span>
            <strong>Distance from ISBT:</strong> {distanceISBT}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default DestinationCard;
