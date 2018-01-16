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
  saveUninitialized: false,
  resave: false,
}));

//register user 

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 12).then(hashedPassword =>{

    app.get('db').create_user([username, hashedPassword]).then(() => {
      req.session.user = { username };
      res.json({ username });
    }).catch(error => {
      console.log('error', error);
      res.status(400).json({ message: "An error occurred; for security reasons it can't be disclosed" });
    });
  })
});

//Login

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  app.get('db').find_user([username]).then(data => {
    
    bcrypt.compare(password, data[0].password).then((pass)=>{
      if(pass){
         req.session.user = { username };
         res.json({ username });
        } else {
            res.status(403).json({ message: 'Invalid password' });
              }
    })
  })
})

//logout
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send();
});

app.post('/library', ctrl.addToLibrary )

const PORT = 3040;
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});