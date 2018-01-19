import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleView } from '../ducks/reducer';

class SingleView extends Component {
   
    componentDidMount(){
        this.props.singleView(this.props.match.params.id)
   } 


  render() {
    const book = this.props.book
    console.log(this.props.book, 'book')
    return (
      <div>
        {book.title}
        {book.author}
        {book.publisher}
        {book.description} 
       <img src= {book.image} alt={book.title}/>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
       book : state.book
    }
}

export default connect(mapStateToProps,{singleView})(SingleView);