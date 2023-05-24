import React, { useState , useReducer} from 'react';

export const initial_state = {
  isOffline: false,
  age: 30,
  skilscore:10 
}

export const Reducer = (state=initial_state, action) => {
  switch (action.type){
    case "ONE":
      return {

      };
    case "TWO":
      return {

      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initial_state);

  return (
    <div>  
      <h1>memeber list</h1>
      <p></p>
      <button onClick={dispatch({type:ONE, })}>합류</button>
      <button onClick={dispatch({type:TWO, })}>휴식</button>
    </div>
  );
}

export default App;
