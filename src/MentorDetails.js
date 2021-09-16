import "./styles.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function MentorDetails() {
  const history = useHistory();

  return (
    <div className="container">
      <button className="btn-sm btn-danger" onClick={() => history.goBack()}>
        Back
      </button>
      <h1 className="text-center">Mentor Details</h1>
      <br />
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
}
