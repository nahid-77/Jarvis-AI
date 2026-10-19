
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify({
    name: "JARVIS",
    status: "online",
    message: "At your service, sir.",
  }));
});

server.listen(3000, () => {
  console.log("JARVIS running at http://localhost:3000");
});
