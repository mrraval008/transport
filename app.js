
const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const shopController = require('./controllers/shopController');
const cors = require('cors');


dotenv.config({path:'./config.env'})

const app = express();
const PORT = 3000;
app.use("/",express.static('dist/transport-ui'))
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});
const DB  = process.env.DB.replace('<PASSWORD>',process.env.DBPASSWORD)

mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(con=>{
    console.log("DB connection succesful...")
})
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors({
    origin: '*'
}));
const shopRouter = require('./routes/shopRoutes');
app.use('/api/v1/shops',shopRouter);

app.all('*',(req,res,next)=>{
    console.log(req.url)
    res.send(`this route is not handled yet`)
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);