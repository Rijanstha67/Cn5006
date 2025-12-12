import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const url = "http://localhost:5000/";

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    axios.post(url + "addbooks", state)
      .then((res) => console.log(res.data));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>

      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className="form-group">
          <label>Book Authors:</label>
          <input
            className="form-control"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Pick Book Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">CS</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        <div className="form-group">
          <label>Format:</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Hard Copy</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Electronic Copy</label>
          </div>
        </div>

        <div>
          <label>Publication Year (1980–2025):</label>
          <input
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
          />
        </div>

        <br />

        <center>
          <button className="btn btn-primary" type="submit">
            Add this book
          </button>
        </center>
      </form>
    </div>
  );
}
