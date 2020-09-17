import React, { useState, useEffect } from "react";
import AddIdea from "./AddIdea";
import firebaseDb from "../firebase";

const Add = () => {
  var [ideasObject, setIdeasObject] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("ideas").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setIdeasObject({
          ...snapshot.val(),
        });
    });
  }, []);

  const addIdeaOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("ideas").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`ideas/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this record")) {
      firebaseDb.child(`ideas/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Idea notes</h1>
        </div>
      </div>
      <AddIdea {...{ addIdeaOrEdit, currentId, ideasObject }} />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Date/Time</th>
              <th scope="col">Reiting</th>
              <th scope="col">Category</th>
              <th scope="col">Short Description</th>
              <th scope="col">Long Description</th>
              <th scope="col">Expectations</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(ideasObject).map((id) => {
              return (
                <tr key={id}>
                  <td>{ideasObject[id].id}</td>
                  <td>{ideasObject[id].time}</td>
                  <td>{ideasObject[id].rating}</td>
                  <td>{ideasObject[id].category}</td>
                  <td>{ideasObject[id].shortDescription}</td>
                  <td>{ideasObject[id].longDescription}</td>
                  <td>{ideasObject[id].expectations}</td>
                  <td>
                    <a
                      className="btn btn-primary"
                      onClick={() => setCurrentId(id)}
                    >
                      Update
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-danger" onClick={() => onDelete(id)}>
                      Delete{" "}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Add;
