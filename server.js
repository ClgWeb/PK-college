const express = require('express');
const PORT= process.env.PORT || 3000;
const app = express();
app.set("view engine","ejs");

app.use(express.static("public"));
app.use(express.json());
app.get('/',(req,res)=>{
    res.render("index");

})

app.get('/login',(req,res)=>{
    console.log("login page opened");
    res.render("login");
})

app.listen(PORT,()=>{
    console.log(`server is running on port 3000`);

})