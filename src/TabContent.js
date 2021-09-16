import "./styles.css";
import React, { useState } from "react";

export default function TabContent({ tab1 }) {
  const [mentorName, setMentorName] = useState("");
  const [mentorEmail, setMentorEmail] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const createStudent = () => {
    if (studentName && studentEmail) {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
      };
      fetch("https://assign-mentor-and-students.herokuapp.com/student/create", {
        method: "POST",
        body: JSON.stringify({ name: studentName, email: studentEmail }),
        headers: headersList
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data);
          alert("Student created successfully");
          setStudentEmail("");
          setStudentName("");
        })
        .catch((e) => console.log(e));
    } else {
      alert("Please fill the fields");
    }
  };
  const createMentor = () => {
    if (mentorName && mentorEmail) {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
      };
      fetch("https://assign-mentor-and-students.herokuapp.com/mentor/create", {
        method: "POST",
        body: JSON.stringify({ name: mentorName, email: mentorEmail }),
        headers: headersList
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data);
          alert("Mentor created successfully");
          setMentorName("");
          setMentorEmail("");
        })
        .catch((e) => console.log(e));
    } else {
      alert("Please fill the fields");
    }
  };
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
                onChange={(e) => setMentorName(e.target.value)}
                value={mentorName}
              />
            </div>
            <div className="form-group">
              <label for="inputPassword">Email-id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setMentorEmail(e.target.value)}
                value={mentorEmail}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={createMentor}
            >
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
                onChange={(e) => setStudentName(e.target.value)}
                value={studentName}
              />
            </div>
            <div className="form-group">
              <label for="inputPassword">Email-id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setStudentEmail(e.target.value)}
                value={studentEmail}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={createStudent}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
