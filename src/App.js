
import './App.css';
import {useReducer } from 'react';

const initState = 0
const DOWM_EVT = 'down'
const UP_EVT = 'up'
 
 const reducer = (state , action ) => {
      switch(action) {
        case UP_EVT : 
          return state + 1
        case DOWM_EVT :
          return state -1
        default  :
        throw new Error('invalid action')
      }
 }


function App() {
   const [count , dispatch] = useReducer(reducer,initState)


  return (
    <div style={{padding : 20}} className="App">
          <h1>{count}</h1>
          <button onClick={()=> dispatch(UP_EVT)}>UP</button>
          <button onClick={() => dispatch(DOWM_EVT)}>DOWN</button>
    </div>
  );
}

export default App;
