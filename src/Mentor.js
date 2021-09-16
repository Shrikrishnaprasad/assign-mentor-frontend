import "./styles.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";

export default function Mentor() {
  const history = useHistory();
  const [mentor, setMentor] = useState("");
  const [students, setStudents] = useState([]);

  const [allMentors, setAllMentors] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  const [assign, setAssign] = useState(false);
  //console.log(students.map((value) => value.value));
  //console.log(mentor.value);

  useEffect(() => {
    const headersList = {
      Accept: "*/*"
    };

    // getting all the mentors
    fetch("https://assign-mentor-and-students.herokuapp.com/mentor/", {
      method: "GET",
      headers: headersList
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setAllMentors(data);
      })
      .catch((e) => console.log(e));

    // getting all the students with not assigned
    fetch("https://assign-mentor-and-students.herokuapp.com/student/", {
      method: "GET",
      headers: headersList
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setAllStudents(data);
      })
      .catch((e) => console.log(e));
    //setAssign(false);
  }, [assign]);

  const handleSubmit = () => {
    if (mentor && students?.length) {
      assignStudents();
    } else {
      alert("Please select both options");
    }
  };
  function assignStudents() {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json"
    };
    fetch(
      `https://assign-mentor-and-students.herokuapp.com/mentor/assignStudents/${mentor.value}`,
      {
        method: "POST",
        body: JSON.stringify({
          students: students.map((value) => value.value)
        }),
        headers: headersList
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        alert(data);
        setMentor(null);
        setStudents(null);
        setAssign(!assign);
      })
      .catch((e) => console.log(e));
  }
  return (
    <div className="container mentor">
      <h1 className="text-center">Mentor</h1>

      <br />
      <h4>Assign the Students for a mentor</h4>
      <div className="row">
        <div className=" col-sm-12 input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="">
              Mentor
            </label>
          </div>
          <Select
            options={allMentors.map((mentor) => {
              return { value: mentor._id, label: mentor.name };
            })}
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setMentor(e)}
            isClearable
            value={mentor}
          />
        </div>
        <div className="col-sm-12 input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="">
              Students
            </label>
          </div>
          <Select
            options={allStudents.map((student) => {
              return { value: student._id, label: student.name };
            })}
            isMulti
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setStudents(e)}
            value={students}
          />
        </div>
        <div className="col-sm-2 input-group mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Assign
          </button>
        </div>
      </div>
      <p className="text-secondary"> * Click a mentor to view his details</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">No.of-Students</th>
          </tr>
        </thead>
        <tbody>
          {allMentors.length ? (
            allMentors.map((mentor, index) => (
              <tr
                onClick={() => history.push(`/mentor/${mentor._id}`)}
                style={{ cursor: "pointer" }}
              >
                <th scope="row">{index + 1}</th>
                <td>{mentor.name}</td>
                <td>{mentor.email}</td>
                <td>{mentor.studentsAssigned.length}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <h2 className="text-center">Loading...</h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
