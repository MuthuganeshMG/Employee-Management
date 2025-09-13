const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const profileRoutes = require('./routes/profileRoutes'); 
const attendanceRoute = require('./routes/attendanceRoute');
const authRoute = require('./routes/authRoute');
// environment
dotenv.config();

const app = express();

connectDatabase();

  app.use(cors()); 
app.use(express.json()); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/auth',authRoute)

app.use('/pf', profileRoutes);

app.use('/api',attendanceRoute);

 
const port = process.env.PORT||3030;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
}); 

 