const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

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
  console.log("Server: GET request received");

  res.send({ talks: talks });
});

app.post("/api/talks", (req, res) => {
  console.log("Server: POST request received: ", req.body);

  newTalk = {
    id: 12345 + Math.round(Math.random() * 10),
    title: req.body.talk.title,
  };

  talks = [...talks, newTalk];

  res.send(newTalk);
});

app.put("/api/talks/:id", function (req, res) {
  console.log("Server: PUT request received: ", req.params, req.body);

  updateTalk = {
    id: parseInt(req.params.id, 10),
    title: req.body.talk.title,
  };

  talks = talks.map((talk, _index) => {
    if (talk.id === updateTalk.id) {
      return updateTalk;
    }

    return talk;
  });

  res.send(updateTalk);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
