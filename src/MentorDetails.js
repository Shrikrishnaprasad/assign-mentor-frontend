import "./styles.css";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function MentorDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [mentor, setMentor] = useState({});
  useEffect(() => {
    const headersList = {
      Accept: "*/*"
    };

    // getting all the mentors
    fetch(`https://assign-mentor-and-students.herokuapp.com/mentor/get/${id}`, {
      method: "GET",
      headers: headersList
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setMentor(data);
        //data?.studentsAssigned?.map((id) => getName(id));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container">
      <button className="btn-sm btn-danger" onClick={() => history.goBack()}>
        Back
      </button>
      <h1 className="text-center">Mentor Details</h1>
      <br />
      {mentor.length !== 0 ? (
        <ul className="list-group">
          <li className="list-group-item">
            <b>Name</b> - {mentor.name || "Loading..."}
          </li>
          <li className="list-group-item">
            <b>Email</b> - {mentor.email || "Loading..."}
          </li>
          <li className="list-group-item">
            <b>No.of.Students</b> -{" "}
            {mentor.studentsAssigned?.length || "Loading..."}
          </li>
          <li className="list-group-item">
            <b>Students-Id</b> -{" "}
            {mentor?.studentsAssigned?.map((student, index) => (
              <>
                <h6>{student || "Loading..."}</h6>
              </>
            ))}
          </li>
        </ul>
      ) : (
        <h3 className="text-center">Loading...</h3>
      )}
    </div>
  );
}
