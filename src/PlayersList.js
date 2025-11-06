import React from "react";
import { Row, Col } from "react-bootstrap";
import { players } from "./players";
import Player from "./Player";

console.log(players);
// Display all players by mapping through the array
function PlayerList() {
  return (
    <Row xs={1} md={2} className="g-4">
      {players.map((player, index) => (
        //  Pass all attributes to Player using spread operator
        <Col key={index}>
          <Player {...player} />
        </Col>
      ))}
    </Row>
  );
}

export default PlayerList;
