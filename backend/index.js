const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body; // getting the username from the request body

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/", // the ChatEngine API endpoint
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "8fa7f3ea-e144-4f49-a5ea-c9a32d7ad911" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
