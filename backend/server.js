const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const expenseRoutes = require("./routes/expenseRoutes");


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

// Test Route
app.get("/api/test", (req, res) => {
    res.json({ message: "API Working" });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log("DB Connection Error:", error);
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});