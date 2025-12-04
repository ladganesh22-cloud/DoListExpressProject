const express = require('express');

const app = express();
const port = 4000;
app.use(express.json());

const toDoListRouter = require('./routes/toDolist');


// Home Page !!!
app.get('/', (req, res) => {
  res.status(200).send('Home Page!!!!');
});


// Use the to-do list router for all routes starting with '/'
app.use('/todolists', toDoListRouter);

app.listen(port, () => {
  console.log(`DoList app listening on port http://localhost:${port}`);
});
