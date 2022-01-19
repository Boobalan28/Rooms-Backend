const express = require('express');
const app = express();
const db=require('./db');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const path = require('path');

const roomsRoutes = require('./routes/roomsRoute');
const userRoute = require('./routes/userRoute');
const bookingsRoute=require('./routes/bookingsRoute');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/Rooms',roomsRoutes);
app.use('/Users' , userRoute);
app.use('/Bookings' , bookingsRoute);

if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Node JS Server Started`))
