// importing the dependencies

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const hbsRouter = require("./hbs/routes/hbs");

// define global root directory
var path = require('path');
global.__rootname = path.resolve(__dirname);



// defining the Express app
const app = express();

app.set("views", path.join(__dirname, "hbs", "views"));
app.set("view engine", "hbs");

// adding Helmet to enhance your API's security
app.use(helmet());


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
// enabling CORS for all requests
app.use(cors());


// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.use(express.static(path.join(__dirname, "public")));

/**
 * API routing
 */

//const apiRouter = require("./src/routes/api");
//app.use("/", apiRouter);

/**
 * Authorization error handler
 */

app.use("/", hbsRouter);

const port = process.env.PORT || 3000;
// Starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});