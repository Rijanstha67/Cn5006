import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddBook from "./Components/AddBook";
import BookUpdate from "./Components/BookUpdate";
import DisplayBooks from "./Components/DsplyBk_fncCompt";
import DeleteBook from "./Components/Delete_Book";

export default function App() {
  return (
    <Router>
      <div className="container">
        <center>
          <h2>On-Line Book Library using React</h2>
        </center>

        <br />

        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/" className="navbar-brand">
            <h4>Add a Book</h4>
          </Link>

          <Link to="/DisplayBooks" className="navbar-brand">
            <h4>Display All Books</h4>
          </Link>
        </nav>

        <br />

        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/edit/:id" element={<BookUpdate />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/DisplayBooks" element={<DisplayBooks />} />
        </Routes>
      </div>
    </Router>
  );
}
