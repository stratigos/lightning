const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

let talks = [
  {
    id: 1,
    title: "When Mystery Guests Become Stowaways"
  },
  {
    id: 2,
    title: "Top 10 Slide Animations for Designers"
  },
  {
    id: 3,
    title: "Q4 2019 Social Capital Updates for the Life Economy"
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/talks", (req, res) => {
  res.send({ talks: talks });
});

app.post("/api/talks", (req, res) => {
  console.log("Server: Request Received:", req.body);

  newTalk = {
    id: 12345, // TODO 🌈
    title: "TODO GET TALK TITLE FROM POST REQUEST BODY",
  };

  talks = [...talks, newTalk];

  res.send(
    `Talks have been updated with: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
