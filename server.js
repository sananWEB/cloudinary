const express=require("express")
const app=express();
require("dotenv").config()
const cors=require("cors")
const cloudinary=require("cloudinary")
require("./clodinary")
const upload=require("./multer")
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });

app.post("/data",upload.single("image"),async(req,res)=>{

  const result = await cloudinary.v2.uploader.upload(req.file.path)
console.log(result)
  // console.log({name:req.body.name,file:req.file})
    
 
})
app.listen("5000",()=>{console.log("server is on")})

