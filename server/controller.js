module.exports={
  addToLibrary(req,res) {
    const db = req.app.get('db')
 const {id,title,author,publisher,publishdate, description, image, userid} = req.body
    db.add_to_library([id, title, author, publisher, publishdate, description, image, userid]).then(response => {
     console.log(response, 'response')
    }).catch(err => console.log(err))
  }
}