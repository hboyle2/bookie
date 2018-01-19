import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Library extends Component {
  render() {
    // console.log(this.props.library, 'aldksfja;lkdsjf;aslkdjf;lasdkfj')
    let library = this.props.library.map((lib, i)=>{
      return (
        <div key={i}>
         <Link to= {`/library/${lib.id}`}><div>{lib.title}</div></Link> 
        </div>
      )
    })
    return (
      <div>
        <h1>hello</h1>
        {library}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
     library: state.library
  }
}
export default connect( mapStateToProps,)(Library)