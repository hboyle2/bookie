const express = require('express');
const bodyPaser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const bcrypt = require('bcrypt');
const ctrl = require('./controller')

require('dotenv').config();
const app = express();
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.use(bodyPaser.json());
app.use(session({
  secret: "mega hyper ultra secret",
  saveUninitialized: true,
  resave: false,
}));


//logout
app.post('/logout', ctrl.logout);
app.post('/register', ctrl.registerUser);
app.post('/login', ctrl.login)
app.post('/library', ctrl.addToLibrary )
app.get('/bob', ctrl.bob )

const PORT = 3040;
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});