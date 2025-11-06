import React from "react";
import { Card } from "react-bootstrap";

// Destructure all props
function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card
      href="#home"
      className="h-100 shadow-sm"
      style={{
        border: "1px solid #ddd",
        borderRadiusTop: "8px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "250px", objectFit: "cover", borderRadius: "6px" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong style={{ color: "brown" }}>Team:</strong> {team} <br />
          <strong style={{ color: "brown" }}>Nationality:</strong> {nationality}{" "}
          <br />
          <strong style={{ color: "brown" }}> JerseyNumber:</strong>{" "}
          {jerseyNumber} <br />
          <strong style={{ color: "brown" }}>Age:</strong> {age} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Define default props for fallback values
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  image: "https://via.placeholder.com/250x250?text=No+Image",
};

export default Player;
