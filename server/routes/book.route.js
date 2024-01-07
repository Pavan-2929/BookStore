import express from 'express'
import Book from '../models/user.model.js'

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res
        .status(400)
        .json({ error: "You need to enter all the data first" });
    }

    const book = await Book.create({ title, author, publishYear });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allBooks = await Book.find();

    res.status(200).json({
      count: allBooks.length,
      allBooks,
    });

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json("You need to enter the data first");
    }

    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, publishYear },
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({ message: "Book updated", book });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book Deleted", book });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router