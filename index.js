const express = require("express")
const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const personRoute = require('./src/routes/personRoutes')


mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
  { useNewUrlParser: true, useUnifiedTopology: true},
  (err, res) => {
    if(err) {
      throw err;
    }else {
      console.log("Success connection to db");
      app.listen(PORT_SERVER, () => {
        console.log("##################");
        console.log("#####API REST#####");
        console.log("##################");
        console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
      });
    }
  }
);

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Bienvenido al index de Node.js')
});


app.use("/api/v1/", personRoute);

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Este es el mensaje desde twilio',
     from: '+17088347783',
     to: '+573014072955'
   })
  .then(message => console.log(message.sid));