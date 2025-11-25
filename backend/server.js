import express from "express";
import axios from "axios";//make api call to pixabay
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors()); // allow frontend access

const API_KEY = process.env.PIXABAY_API_KEY;

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Missing query parameter" });

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&per_page=4`;

  try {
    const response = await axios.get(url);
    res.json(response.data); 
  } catch (error) {
    console.error("Error fetching from Pixabay:", error.message);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

