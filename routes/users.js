var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */


router.post('/login',async function(req,res){

  if(!req.body|| !req.body.email){
    res.status(400).json({message:"invalid email"})
  }
  const email = req.body.email
  try{


  let response = await axios.post(`${process.env.ISSUER_BASE_URL}/passwordless/start`,{

      client_id: process.env.CLIENT_ID,
      client_secret: process.env.SECRET, // only for web apps, native apps don’t have a client secret
      connection: 'email',
      email: email,
      send: 'code'

  });
  console.log("received response", response.data);
  res.status(200).json({message:"successfully sent the request"});
  } catch (error){

    console.log("error happened while connecting to auth0", error);
    res.status(500).json({error:error})
  }
})
router.post('/otp', async function(req,res){
    if(!req.body || !req.body.email || !req.body.otp){
        res.status(400).json({message:"invalid otp"})

    }
    const {otp, email} = req.body;
    try{


        let response = await axios.post(`${process.env.ISSUER_BASE_URL}/oauth/token`,{

            grant_type : "http://auth0.com/oauth/grant-type/passwordless/otp",
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.SECRET, // only for web apps, native apps don’t have a client secret
            username:email, // or "<phone number>"
            otp: otp,
            realm: "email", // or "sms"
            scope: "openid profile email"

        });
        console.log("received response", response.data);
        res.status(200).json({
            message:"successfully sent the request",
            data: response.data
        });
    } catch (error){

        console.log("error happened while sending otp", error);
        res.status(500).json({error:error})
    }
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
