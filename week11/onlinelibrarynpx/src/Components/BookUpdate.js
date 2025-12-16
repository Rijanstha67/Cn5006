import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookUpdate() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const params = useParams();
  const url = "http://localhost:5000/";

  useEffect(() => {
    axios.get(url + "getbook/" + params.id)
      .then((res) => setState(res.data))
      .catch(() => console.log("Error loading book"));
  }, [params.id]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    axios.post(url + "updatebook/" + params.id, state)
      .then((res) => console.log(res.data));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book: {state.booktitle}</h3>

      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Authors:</label>
          <input
            className="form-control"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        <div className="form-group">
          <label>Format:</label>
          <div>
            <input
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
            />
            Hard Copy

            <input
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
            />
            Electronic Copy
          </div>
        </div>

        <div>
          <label>Publication Year:</label>
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
            Update
          </button>
        </center>
      </form>
    </div>
  );
}
