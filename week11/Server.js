// this code runs with mongoose v7 plus (as in Part 1)
var express = require("express");
let Books = require("./BooksSchema");
const connectDB = require("./MongoDBConnect");
const cors = require("cors");

console.log("Server2k25");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
  console.log("this is default");
  res.send("This is default");
});

// 1) Display all books
app.get("/allbooks", async (req, res) => {
  const d = await Books.find();
  return res.json(d);
});

// 2) Get single book by id
app.get("/getbook/:id", async (req, res) => {
  let id = req.params.id;
  const book = await Books.findById(id);

  if (book) return res.json(book);
  return res.status(404).json({ error: "Book not found" });
});

// 3) Add book
app.post("/addbooks", function (req, res) {
  console.log("Ref", req.body);
  let newbook = new Books(req.body);
  console.log("newbook->", newbook);

  newbook
    .save()
    .then(() => res.status(200).json({ books: "book added successfully" }))
    .catch(() => res.status(400).send("adding new book failed"));
});

// 4) Update book
app.post("/updatebook/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const update = {
      booktitle: req.body.booktitle,
      PubYear: req.body.PubYear,
      author: req.body.author,
      Topic: req.body.Topic,
      formate: req.body.formate,
    };

    console.log("Update request:", { id, update });

    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true, runValidators: true }
    );

    if (!updatedBook) return res.status(404).json({ error: "Book not found" });

    return res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({
      error: "Failed to update book",
      details: err.message,
    });
  }
});

// 5) Delete book
app.post("/deleteBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Deleting book:", id);

    const deletedBook = await Books.findByIdAndDelete(id);
    if (!deletedBook) return res.status(404).json({ error: "Book not found" });

    res.status(200).send("Book Deleted");
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete book", details: err.message });
  }
});

// Start server after DB connect (same pattern as Part 1)
(async () => {
  await connectDB();
  app.listen(5000, () => console.log("✅ Server running on port 5000"));
})();
