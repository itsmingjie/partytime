const express = require("express");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const axios = require("axios");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (_, res) => {
  res.redirect(process.env.STATIC_URL);
});

app.use(basicAuth({
    challenge: true,
    authorizer: safeAuth
}));

function safeAuth(username, password) {
    const userMatches = basicAuth.safeCompare(username, process.env.USERNAME)
    const passwordMatches = basicAuth.safeCompare(password, process.env.PASSWORD)
 
    return userMatches & passwordMatches
}

app.get("/new", (_, res) => {
  axios
    .post(process.env.ZAPIER_HOOK + "?hash=" + process.env.ZAPIER_HASH)
    .then(() => {
      setTimeout(() => {
        res.redirect(process.env.STATIC_URL);
      }, 5000);
    })
    .catch((error) => {
      res.sendStatus(401);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
