import axios from 'axios'
const GET_LIBRARY = "GET_LIBRARY";

let initialState = {
  library: []
}



export default function reducer(state=initialState, action) {
  switch(action.type) {
    
      case GET_LIBRARY + "_FULFILLED":
          return Object.assign({}, state, {library:  action.payload});
         
          default:
          return state;

  }
}

export function login(username, password) {
    return {
      type: GET_LIBRARY,
      payload: axios.post('/login', {username,password}).then((lib)=>{
        return lib.data
      })
  }
}