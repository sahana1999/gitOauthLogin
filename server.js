import express from "express";
import fetch from "node-fetch";
const app=express()
const client_id = 'Iv1.4b63d22acf8c9f39'
const client_secret ='a462ce37d862d4fa83db3cd35c0d1b1e8e50bb74'
console.log({ client_id, client_secret });

app.get("/", (req, res) => {
  res.send("Hello GitHub auth");
});

app.get("/login/github", (req, res) => {
  const redirect_uri = "http://localhost:9000/login/github/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
  );
});

   
app.get("/login/github/callback",(req,res)=>{

})

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
