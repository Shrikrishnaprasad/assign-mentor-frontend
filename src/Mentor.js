import "./styles.css";
import React, { useState } from "react";
import Select from "react-select";

export default function Mentor() {
  const [mentor, setMentor] = useState("");
  const [students, setStudents] = useState([]);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  console.log(students.map((value) => value.value));
  console.log(mentor.value);
  return (
    <div className="container mentor">
      <h1 className="text-center">Mentor</h1>

      <br />
      <h4>Assign the students for a mentor</h4>
      <div className="row">
        <div className=" col-sm-12 input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Mentor</label>
          </div>
          <Select
            options={options}
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setMentor(e)}
          />
        </div>
        <div className="col-sm-12 input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Students</label>
          </div>
          <Select
            options={options}
            isMulti
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setStudents(e)}
          />
        </div>
        <div className="col-sm-2 input-group mb-3">
          <button className="btn btn-primary">Assign</button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Students</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
