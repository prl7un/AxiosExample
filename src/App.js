import { useRef} from "react";


function App() {

  const R = useRef(3);

  const mult= () => {
    R.current = R.current*10;
    console.log(R.current)
  }

  return (
    <div> 
      <hr></hr>
      <p>{R.current}</p>
      <button onClick={mult}>Ref변화</button>
      <hr></hr>
    </div>
  );
}

export default App;
