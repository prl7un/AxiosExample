import React, { useState} from 'react';


function App() {
  const [num, setNum] = useState(0);
  const style = {
    color: "red",
    width:`${num}px`,
    height:`${300-num}px`
  }
  
  return (
    <div style={style}>  
      <button onClick={setNum(num+1)}>click</button>
    </div>
  );
}

export default App;
