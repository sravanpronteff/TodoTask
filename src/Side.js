import React, { useState, useEffect } from "react";
import "./side.css";
import Card from "./Card";

export default function Side() {
  useEffect(() => {}, []);
  const [data, setData] = useState([1, 2, 3]);
  return (
    <div className="sideBar">
      <div
        style={{
          height: "5vh",
          margin: 5,
          background: "red",
        }}
      >
        create new Task
      </div>
      {data.length > 0
        ? data.map((item, key) => {
            return <Card />;
          })
        : null}
    </div>
  );
}
