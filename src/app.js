const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.static('public'));

const corsOptions ={
    origin:['http://localhost:8081', 'http://localhost:8080', "http://192.168.31.20:8080"], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

require('./passport')

//routers
const userRouter = require('./routes/userRouter')
const farmRouter = require('./routes/farmRouter')
const blockRouter = require('./routes/blockRouter')
const smallBlockRouter = require('./routes/smallBlockRouter')
const noteRouter = require('./routes/noteRouter')
const healthDataRouter = require('./routes/healthDataRouter')
const humidityDataRouter = require('./routes/humidityDataRouter')
const temperatureDataRouter = require('./routes/temperatureDataRouter')
const sensorRouter = require('./routes/sensorRouter')

const url = '/api/'

app.use(url+'users', userRouter)
app.use(url+'farms', farmRouter)
app.use(url+'blocks', blockRouter)
app.use(url+'smallBlocks', smallBlockRouter)
app.use(url+'notes', noteRouter)
app.use(url+'healthDatas', healthDataRouter)
app.use(url+'humidityDatas', humidityDataRouter)
app.use(url+'temperatureDatas', temperatureDataRouter)
app.use(url+'sensors', sensorRouter)


app.listen(process.env.PORT || 8088, function(req , res ){
    console.log('server is running...'); 
})