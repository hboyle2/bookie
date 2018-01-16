import React, { Component } from 'react';
import axios from 'axios'
class Books extends Component {
  
  
  addToLibrary(id, title, author, publisher, publishdate, description, image, userid){
    // console.log('id', id,"title", title,"author", author,"publisher", publisher,"publishdate", publishdate,"desc", description, "img", image, "user",userid)
    axios.post('/library', { id,title, author, publisher,  publishdate, description, image, userid}).then((bob)=>{
      return bob.data
  })
  }

  render() {
    const bo = this.props.bo
    return (
      
      <div>
         <li >{bo.volumeInfo.title}</li>
          <img src={bo.volumeInfo.imageLinks.thumbnail} />
          <div>{bo.volumeInfo.ratingsCount}</div>
          <button onClick = {()=>this.addToLibrary(bo.id, bo.volumeInfo.title, bo.volumeInfo.authors, bo.volumeInfo.publisher, bo.volumeInfo.publishedDate, bo.volumeInfo.description, bo.volumeInfo.imageLinks.thumbnail, 4)}>add to library</button>
      </div>
    );
  }
}
// id, title, author, publisher, publishdate, description, image, userid
export default Books;