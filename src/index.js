const express = require('express');
const bodyParser = require('body-parser');
const midileware = require('./middlewares/commonMiddlewares')
//var getIP = require('ipware')().get_ip;
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
     function (req, res, next) {
         console.log ("inside GLOBAL MW");
         next();
   }
   );

app.use('/createuser', route);

app.use (
    function (req, res, next) {
        let dmy = moment().format('DD-MM-YYYY, HH:mm:ss');
        let ipAddress = req.ip;
        let url = req.originalUrl
        console.log (dmy +" , "+ipAddress+" , "+url);
        next();
    }
);

//app.use('/',commonMiddelWear.middelWear, route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
