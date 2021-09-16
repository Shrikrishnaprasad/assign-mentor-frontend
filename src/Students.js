import "./styles.css";
import React, { useState } from "react";
import Select from "react-select";

export default function Students() {
  const [mentor, setMentor] = useState("");
  const [student, setStudent] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  console.log(student.value);
  console.log(mentor.value);
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
            options={options}
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setStudent(e)}
          />
        </div>
        <div className=" col-sm-12 input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="">
              Mentor
            </label>
          </div>
          <Select
            options={options}
            name="colors"
            className="w-75 basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setMentor(e)}
          />
        </div>
        <div className="col-sm-2 input-group mb-3">
          <button className="btn btn-primary">Change</button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mentor Name</th>
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
