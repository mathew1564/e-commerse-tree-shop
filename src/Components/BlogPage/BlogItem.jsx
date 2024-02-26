import React from "react";
import { Row, Col } from "react-bootstrap";
import "./BlogItem.scss";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export default function BlogItem({ item }) {
  const navigate = useNavigate();

  return (
    <Card className="item-blog">
      <Card.Img variant="top" src={item.img} className="item-img" />
      <Card.Body>
        <section>
          <div></div>
          <div className="item-time mt-3 mb-3">{item.time}</div>
          <div className="item-name">{item.name}</div>
          <div className="item-que mt-2 mb-2">{item.question}</div>
          <div
            className={`item-tag mb-3 ${
              item.tag === "Decore" ? "decore" : "event"
            }`}
          >
            {item.tag}
          </div>
        </section>
      </Card.Body>
    </Card>
  );
}
