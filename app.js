const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path"); // ✅ FIX 1
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("userLocation", (data) => {
    console.log(data);
    io.emit("userLocation", {id:socket.id,...data});
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("user-disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("server started");
});
