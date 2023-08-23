import Express from "express";
let app = Express();
app.listen(300, (error) => {
  if (error) console.log(error);
  else console.log("connected @ http://localhost:300");
});
app.post("/app", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
app.post("/", (req, res) => {
  req(req.body);
  res.json(req.body);
});
