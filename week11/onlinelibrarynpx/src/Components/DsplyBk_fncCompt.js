import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function DisplayBooks() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allbooks")
      .then((res) => setBooks(res.data))
      .catch(() => console.log("Error fetching books"));
  }, []);

  return (
    <div>
      <DisplayData Books={Books} />
    </div>
  );
}
