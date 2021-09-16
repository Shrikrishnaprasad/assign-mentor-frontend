import "./styles.css";
import React from "react";

export default function TabContent({ tab1 }) {
  return (
    <div className="tab-content">
      <div className={`tab-pane fade  ${tab1 && "show active"}`}>
        <div className="card bg-light mb-3">
          <div className="card-header">
            <h4>Create a new mentor</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label for="inputEmail">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mentor name"
              />
            </div>
            <div className="form-group">
              <label for="inputPassword">Email-id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
      <div className={`tab-pane fade  ${!tab1 && "show active"}`}>
        <div className="card bg-light mb-3">
          <div className="card-header">
            <h4>Create a new student</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label for="inputEmail">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Student name"
              />
            </div>
            <div className="form-group">
              <label for="inputPassword">Email-id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
