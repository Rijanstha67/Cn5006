import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DisplayData from "./DisplayData";

export default function DeleteBook() {
  const [books, setBooks] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.post("http://localhost:5000/deleteBook/" + params.id)
      .then(() => {
        axios.get("http://localhost:5000/allbooks")
          .then((res) => setBooks(res.data));
      });
  }, [params.id]);

  return (
    <div>
      <DisplayData Books={books} />
    </div>
  );
}
