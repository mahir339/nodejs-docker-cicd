const express = require("express");

const app = express();
const PORT = 3001;

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

app.get("/", async (req, res) => {
    try {
        const response = await fetch(BACKEND_URL);
        const data = await response.json();

        res.json({
            frontend: "Frontend is running",
            backend: data
        });
    } catch (error) {
        res.status(500).json({
            frontend: "Frontend is running",
            backend: "Backend is unreachable",
            error: error.message
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running on port ${PORT}`);
});
