// reducers take 2 args. they're called when an action occurs
// state is not application state, only the state this reducer is responsible for
// null default value
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  
  return state
}
