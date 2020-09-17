import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

const AddIdea = (props) => {
  const initialFieldValies = {
    id: uuid(),
    time: "",
    rating: "",
    category: "",
    shortDescription: "",
    longDescription: "",
    expectations: "",
  };

  var [values, setValues] = useState(initialFieldValies);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValies,
      });
    else
      setValues({
        ...props.ideasObject[props.currentId],
      });
  }, [props.currentId, props.ideasObject]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.addIdeaOrEdit(values);
  };

  const handleOnChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group row ">
        <div className="col-3">
          <div className="form-group ">
            <label style={{ float: "left" }}>Date/Time</label>
            <input
              value={values.time}
              onChange={handleOnChange}
              name="time"
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label style={{ float: "left" }}>Reiting 1-10</label>
            <input
              value={values.rating}
              onChange={handleOnChange}
              name="rating"
              type="number"
              min="1"
              max="10"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label style={{ float: "left" }}>Category</label>
            <select
              className="form-control custom-select"
              value={values.category}
              onChange={handleOnChange}
              name="category"
              type="text"
            >
              <option selected>Open this select menu</option>
              <option>Lični život</option>
              <option>Posao</option>
              <option>Obrazovanje</option>
              <option>Zabava</option>
              <option>Putovanje</option>
              <option>Ostalo</option>
            </select>
          </div>
          <div className="row">
            <input
              type="submit"
              value={props.currentId == "" ? "Add Idea" : "Update"}
              style={{ marginLeft: "15px" }}
              className="btn btn-success"
            />
          </div>
        </div>
        <div className="form-group col-3">
          <label style={{ float: "left" }}>Short Description</label>
          <textarea
            name="shortDescription"
            value={values.shortDescription}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
          ></textarea>
        </div>
        <div className="form-group col-3">
          <label style={{ float: "left" }}>Long Description</label>
          <textarea
            name="longDescription"
            value={values.longDescription}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
          ></textarea>
        </div>
        <div className="form-group col-3">
          <label style={{ float: "left" }}>Expectations</label>
          <textarea
            name="expectations"
            value={values.expectations}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default AddIdea;
