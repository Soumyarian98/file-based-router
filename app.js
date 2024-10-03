const http = require("http");
const path = require("path");

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = path.join(
    __dirname, url, method.toLowerCase() + ".js"
  )
  console.log(filePath)

  try {
    const handler = require(filePath + "");
    handler(req, res);
  } catch (error) {
    res.write("404 - Page not found");
    return res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})