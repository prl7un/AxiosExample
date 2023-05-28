import { useRef, useState } from "react";


function App() {

  const [val, setVal] = useState();
  const R = useRef(10);

  const mult= (a) => {
    a.current = setVal(a.current*10);
  }

  return (
    <div> 
      <hr></hr>
      <p>{R.current}</p>
      <button onClick={() => {mult(R)}}>Ref변화</button>
      <hr></hr>
    </div>
  );
}

export default App;
