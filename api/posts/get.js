const GET = (req, res) => {
  console.log("GET request to /api/posts/post.js")
  res.write(JSON.stringify({
    message: "GET request to /api/posts/post.js"
  }))
  return res.end()
}

module.exports = GET