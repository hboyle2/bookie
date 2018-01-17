import React, { Component } from 'react';
import { connect } from 'react-redux';

class Library extends Component {
  render() {
    console.log(this.props.library, 'aldksfja;lkdsjf;aslkdjf;lasdkfj')
    let library = this.props.library.map((lib, i)=>{
      return (
        <div key={i}>
          <div>{lib.title}</div>
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