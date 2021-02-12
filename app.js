const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello world2</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(port, () => {
  console.log("listening on *:" + port);
});
