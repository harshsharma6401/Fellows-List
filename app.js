const express = require('express');
const morgon = require('morgan');

const app = express();

//Register view Engine
app.set('view engine','ejs');

//MiddlesWares
app.use(morgon('dev'));

//Serving Static Files
app.use(express.static('public'));

const port = 3000 | process.env.port;

const peerdata = require('./fellows.json');

//GET requests
app.get('/root',(req,res) =>{
    res.render('index');
});

app.get('/',(req,res) =>{
    res.render('index' , {title:'Lightening talk', peers: peerdata });
});

//Listening to the port
app.listen(port,(error)=>{

    if(error)
    {
        console.log("Coudn't listen to the server");
    }
    else
    {
        console.log("Server listening on Port", port);
    }

});


