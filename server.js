import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 5004;

//registering middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

//registering routes
app.get("/", (req, res) => {
  res.status(200).send("Weather API is Running!");
});

//fetching weather forecast for a particular city
app.get("/weather", async (req, res) => {
    if (!req.query.city) {
      res.status(404).json("City is missing");
    } else {
      let city = req.query.city;
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
      );
  
      const data = await response.json();
      res.status(200).json(data);
    }
  });

//creating server
app.listen(port, () => {
  console.log(`server is up on ${port}`);
});