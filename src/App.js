import { useRef, useState } from "react";


function App() {

  const [val, setVal] = useState(10);
  let RR = useRef(10);
  let v = 10;


  const mult= (a) => {
    a.current = setVal(a.current*10);
  }

  return (
    <div> 
      <p>{v}</p>
      <button onClick={(v) =>(v*10)}>값변화</button>
      <hr></hr>
      <br></br>
      <p>{val}</p>
      <button onClick={mult}>Ref변화</button>
    </div>
  );
}

export default App;
