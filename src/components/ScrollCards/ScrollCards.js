import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./style.css";

export function ScrollCards({ id, src, title, route }) {
  return (
    <Card className="medical-services-card">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title className="text-title-text">
          <Link className="text-title-text" to={route}>
            {title}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
