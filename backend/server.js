const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config.js");

const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

const app = express();

// Configure CORS to allow requests from Netlify frontend
app.use(cors({
  origin: [
    'https://libratrack-v1.netlify.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/borrows", borrowRoutes);


const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
