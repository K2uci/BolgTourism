const express = require("express"); 
const cors = require('cors'); 
const morgan = require('morgan');


const app = express();

const routesPost = require('./routes/Post/RoutePost');
const routesComment = require('./routes/Comments/RouteComments');
const routesUsers = require('./routes/User/RouteUser');
const routesLike = require('./routes/Likes/RouteLikes');
const routesDestination = require('./routes/Destinations/RouteDestinations');


app.use('/post',routesPost);
app.use('/comment',routesComment);
app.use('/users',routesUsers);
app.use('/like',routesLike);
app.use('/destination',routesDestination);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

module.exports = app;