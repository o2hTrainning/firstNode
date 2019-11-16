const http = require('http')


const express = require('express')
const app = express()
//initialise body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
/*attach api route */
const APIRouter = require('./routes/api')
app.use('/api/v1/',APIRouter)



//const sequelize = require('./utils/database');

//const APIRouter = require('./routes/api')


/*attach api route */
//app.use  ('/api/v1/',APIRouter)



app.get('/',(req, res)=>{
	res.status(400);
	res.send({"success":"Your server is up and running"})
})

app.use((req,res,next)=>{
	res.status(404).send({"error":"Route not found"})
})




const server = http.createServer(app)
server.listen(4004)

