const express = require('express');
const app = express();
const path = require('path');

const { messagesRouter } = require('./routes/messagesRouter');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', messagesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
