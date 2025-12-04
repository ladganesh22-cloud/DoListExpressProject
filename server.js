// connect to Express JS
const express = require('express');

// USED to Express JS Funtions
const app = express();

// Used Port Number: 4000
const port = 4000;

app.use(express.json());

// required the to-do list router
const toDoListRouter = require('./routes/toDolist');


// Home Page !!!!
app.get('/', (req, res) => {
  res.status(200).send('Home Page!!!!!!');
});


// Use the to-do list router for all routes starting with '/'
app.use('/todolists', toDoListRouter);

app.listen(port, () => {
  console.log(`DoList app with Express JS listening on port http://localhost:${port}`);
});
