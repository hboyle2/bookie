
const bcrypt = require('bcrypt');

module.exports={
  registerUser(req, res) {
    const { username, password } = req.body;
    bcrypt.hash(password, 12).then(hashedPassword =>{
      const db = req.app.get('db')
      db.create_user([username, hashedPassword]).then(() => {
        req.session.user = { username };
        res.json({ username });
      }).catch(error => {
        console.log('error', error);
        res.status(400).json({ message: "An error occurred; for security reasons it can't be disclosed" });
      });
    })
  },

  login(req, res) {
    const { username, password } = req.body;
    const db = req.app.get('db')
    db.find_user([username]).then(data => {
      // console.log(data, "data")
      bcrypt.compare(password, data[0].password).then((pass)=>{
        if(pass){
          db.get_library([data[0].id]).then((book)=>{
            console.log(book, 'book')
          })
           req.session.user = { username };
           res.json({ username });
          } else {
              res.status(403).json({ message: 'Invalid password' });
                }
      })
    })
  },

  logout(req, res) {
    req.session.destroy();
    res.send();
  },

  addToLibrary(req,res) {
    const db = req.app.get('db')
 const {id,title,author,publisher,publishdate, description, image, userid} = req.body
    db.add_to_library([id, title, author, publisher, publishdate, description, image, userid]).then(response => {
     console.log(response, 'response')
    }).catch(err => console.log(err))
  },

  bob(req, res){
    const db = req.app.get('db')
    console.log(req.user, 'req')
  }
}