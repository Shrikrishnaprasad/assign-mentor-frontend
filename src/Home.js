import "./styles.css";
import React, { useState } from "react";
import TabContent from "./TabContent";

export default function Home() {
  const [tab1, setTab1] = useState(true);
  return (
    <div className="container">
      <h1 className="text-center">Assign Mentor for students</h1>
      <br />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${tab1 && "active"}`}
            data-bs-toggle="tab"
            href="#home"
            onClick={() => setTab1(true)}
          >
            Add-Mentor
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${!tab1 && "active"}`}
            data-bs-toggle="tab"
            href="#home"
            onClick={() => setTab1(false)}
          >
            Add-Student
          </a>
        </li>
      </ul>
      <TabContent tab1={tab1} />
    </div>
  );
}
