import React, { useState , useReducer} from 'react';

export const initial_state = {
  isOffline: false,
  age: 30,
  skilscore:10 
}
const Reducer = (state, action) => {
  switch (action.type){
    case "ONE":
      return {
        ...state,
        isOffline: !state.isOffline
      };
    case "TWO":
      return {
        ...state,
        skilscore: state.skilscore+1
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initial_state);

  return (
    <div>  
      <h1>아카데미</h1>
      <button onClick={()=>dispatch({type:"ONE"})}>출입</button>
      <button onClick={()=>dispatch({type:"TWO" })}>스킬업</button>
      <p>{state.isOffline ? "입장": "퇴장"}</p>
      <p>스킬점수{state.skilscore}</p>
    </div>
  );
}

export default App;
