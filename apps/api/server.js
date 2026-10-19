const express = require("express");

const app = express();
const PORT = 3000;

// Middleware: JSON request body
app.use(express.json());

// Route 01: JARVIS Home
app.get("/", (req, res) => {
  res.status(200).json({
    name: "JARVIS",
    message: "Welcome to your AI assistant.",
    status: "online",
  });
});

// Route 02: Assistant status
app.get("/api/status", (req, res) => {
  res.status(200).json({
    assistant: "JARVIS",
    status: "online",
    version: "0.1.0",
  });
});

// Route 03: Server health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
  });
});

// Unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`JARVIS server running at http://localhost:${PORT}`);
});
