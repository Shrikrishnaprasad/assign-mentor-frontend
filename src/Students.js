import "./styles.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function Students() {
  const [mentor, setMentor] = useState("");
  const [student, setStudent] = useState("");

  const [allMentors, setAllMentors] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const headersList = {
      Accept: "*/*"
    };

    // getting all the mentors
    fetch("http://localhost:5000/mentor/", {
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

    // getting all the students with assigned
    fetch("http://localhost:5000/student/isAssigned/", {
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
  }, [changed]);

  const handleSubmit = () => {
    if (mentor && student) {
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
    fetch(`http://localhost:5000/student/changeMentor/${student.value}`, {
      method: "POST",
      body: JSON.stringify({
        mentorId: mentor.value
      }),
      headers: headersList
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        alert(data);
        setMentor(null);
        setStudent(null);
        setChanged(!changed);
      })
      .catch((e) => console.log(e));
  }

  console.log(student?.value);
  console.log(mentor?.value);
  return (
    <div className="container mentor">
      <h1 className="text-center">Students</h1>

      <br />
      <h4>Change a mentor for a student</h4>
      <div className="row">
        <div className=" col-sm-12 input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="">
              Student
            </label>
          </div>
          <Select
            options={allStudents.map((student) => {
              return { value: student._id, label: student.name };
            })}
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setStudent(e)}
            value={student}
          />
        </div>
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
        <div className="col-sm-2 input-group mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Change
          </button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mentor name</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.length ? (
            allStudents.map((student, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.mentorName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <h2 className="text-center">Loading...</h2>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
