import axios from 'axios'

export function fetchUsers() {
  const request = axios.get(`http://jsonplaceholder.typicode.com/users`);
  // Vanilla redux expects us to return an action,
  // this is a rule that we don't want to obey,
  // when we have a request object here, we don't yet have any data to return from this function
  // we have to wait for the request to resolve before i actually have any data to send across to my dispatch method
  // so let's make use of redux thunk

  // the first thing we are going to do with redux thunk is we need to realize that
  // all of the existing rules for action creators is kind of go out the window 无效
  // vanilla redux expects us to return in action which is a plain javascript object
  // redux thunk on the other hand, enables one other return type and that is a plain javascript function.
  // so only with redux thunk are we able to return a plain javascript function as below

  // the first argument is dispatch method, and the dispatch method is essentially that big funnel/pipe
  // if we pass an action into dispatch, it's going to be sent off to all of our different reducers
  return (dispatch)=>{
    // wait for the request to resolve with some amount of data
    // and then only then the request has actually resolved, am i going to dispatch an action
    request.then(({data})=>{
      dispatch({
        type: 'FETCH_PROFILES',
        payload: data
      })
    })

  }
}