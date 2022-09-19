import React, { useContext, useReducer } from 'react'

// Actions
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const myContext = React.createContext(null)

const Points = () => {
  const state = useContext(myContext)
  return (
    <p>Points: {state.count}</p>
  )
}

const Counter = () => {
  // Initial State for Reducer
  const initialState = {
    count: 0

  }
  // Reducer to change State
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + action.payload.quantity
        }
      case DECREMENT:
        return {
          ...state,
          count: state.count - action.payload.quantity
        }
      case RESET:
          return {
            ...state,
            count: 0
        }
      default:
        return state
    }
  }

  // Asing useReducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <myContext.Provider value={state}  >
      <div>      
        {/* <p>Points: {state.count}</p> */}
        <Points/>
        <button onClick={
          () => dispatch({
            type: INCREMENT,
            payload: {
              quantity: 2
            }
          })
        }>
          INCREMENT*2
        </button>
        <button onClick={
          () => dispatch({
            type: DECREMENT,
            payload: {
              quantity: 1
            }
          })
        }>
          DECREMENT
        </button>
        <button onClick={
          () => dispatch({type: RESET})
        }>
          RESET
        </button>
      </div>
    </myContext.Provider>
  );
}

export default Counter;
