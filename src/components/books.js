import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addToLibrary} from '../ducks/reducer'

class Books extends Component {
  
  render() {
    const bo = this.props.bo
    return (
      
      <div >
         <li >{bo.volumeInfo.title}</li>
          <img src={bo.volumeInfo.imageLinks.thumbnail} />
          <div>{bo.volumeInfo.authors}</div>
          <button onClick = {()=>this.props.addToLibrary(bo.id, bo.volumeInfo.title, bo.volumeInfo.authors[0], bo.volumeInfo.publisher, bo.volumeInfo.description, bo.volumeInfo.imageLinks.thumbnail)}>add to library</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
     library : state.library
  }
}
export default connect( mapStateToProps, {addToLibrary})(Books)