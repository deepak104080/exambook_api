const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h2>ExamBook API is running...')
})


const usersRoute = require('./routes/users');
app.use('/users', usersRoute);
const examsRoute = require('./routes/exams');
app.use('/exams', examsRoute);


app.listen(process.env.PORT || 4000);



// CREATE TABLE
// INSERT INTO TABLE
// SELECT * FROM TABLE