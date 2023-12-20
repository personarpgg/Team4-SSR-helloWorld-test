const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (res, req)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, ()=>{
    console.log(`서버오픈 : http://localhost${port}`)
});


/*
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
*/
