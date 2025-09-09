const express = require("express");
const app = express();
const port = 8080 ;
const path = require("path") ;

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/register",(req,res) => {
    res.render("login.ejs");
})

app.get("/home",(req,res) =>{
    res.render("index.ejs");
})

app.post("/register",(req,res) =>{
    let {user,password}=req.body;
    console.log(user,password);
    res.redirect("/home");
})


app.get("/map",(req,res)=>{
    res.send(()=>{let map;
async function initMap() {
  const { Map } = google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
initMap();})
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})