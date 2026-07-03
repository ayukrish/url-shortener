const express = require("express");
const { nanoid } = require("nanoid");

const app = express();
const PORT = 3000;


// In-memory storage
const urls = {};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Create short URL
app.post("/shorten", (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({
       error: "URL is required"
    });
  }

  const id = nanoid(6);

  urls[id] = url;

  res.json({
    shortUrl: `http://localhost:${PORT}/${id}`
  });
});



app.get("/:id", (req, res) => {
  console.log(req.params.id, 'ididididi');
  const url = urls[req.params.id];

  if (!url) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(url);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

