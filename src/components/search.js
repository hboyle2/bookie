import React, { Component } from 'react';
import axios from 'axios';
import Books from './books'


class Search extends Component {
  constructor(){
    super()

    this.state={
      people: [],
      books: [],
      bookChoice: ""
    }
  }

     getBookdata(prop){
     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${prop}`).then((response) => {
      this.setState({
         books: response.data.items,
         bookChoice: ""
       })
      });
    }
       
    handleChange(val){
      this.setState({bookChoice: val})
    }

    
 
  
  render() {
 
    const book = this.state.books.map((bo)=>{
    if(bo.volumeInfo.imageLinks !== undefined){
      console.log(bo.volumeInfo.publishedDate, 'date')

      return (

        <Books key={bo.id} bo={bo}/>
       
      )
    }
    })
    return (
      <div className="App">
       {book}
        <input value= {this.state.bookChoice} onChange={ (e)=>this.handleChange(e.target.value)} />
        <button onClick = {() => this.getBookdata(this.state.bookChoice)}>Button</button>
      </div>
    );
  }
}

export default Search;