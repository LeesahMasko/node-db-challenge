const server = require('./server');

const port = process.env.PORT || 4000

// server.use(express.json())

// server.get("/api/projects", async (req, res, next) => {
//   try {
//     res.json(await getProjects()).end();
//   } catch (err) {
//     next(err)
//   }
// });

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
