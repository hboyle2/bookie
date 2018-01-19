import axios from 'axios'
const GET_LIBRARY = "GET_LIBRARY";
const ADD_TO_LIBRARY = 'ADD_TO_LIBRARY';
const SINGLE_VIEW = 'SINGLE_VIEW'

let initialState = {
  library: [],
  book: {}
}



export default function reducer(state=initialState, action) {
  switch(action.type) {
    
      case GET_LIBRARY + "_FULFILLED":
          return Object.assign({}, state, {library:  action.payload});
      
      case ADD_TO_LIBRARY + "_FULFILLED":
          return Object.assign({}, state, {library:  action.payload});
      
      case SINGLE_VIEW + "_FULFILLED":
           return Object.assign({}, state, {book: action.payload})
         
          default:
          return state;

  }
}

export function login(username, password) {
    return {
      type: GET_LIBRARY,
      payload: axios.post('/login', {username,password}).then((lib)=>{
      window.location.assign("http://localhost:3000/#/library")
          return lib.data
        })
    }
  }

export function addToLibrary(id, title, author, publisher,description, image){
      return{
        type: ADD_TO_LIBRARY,
        payload: axios.post('/library', { id,title, author, publisher,  description, image}).then((bob)=>{
          return bob.data
        })
      }
    }

export function singleView(id){
      return{
        type: SINGLE_VIEW,
        payload: axios.get(`/library/${id}`).then((bob)=>{
          return bob.data
        })
      }
    }
