import { useRef, useState} from "react";


function App() {

  const R = useRef(3);

  const mult= () => {
    R.current = R.current*10;
    console.log(R.current)
  }

  const t_Ref = useRef('');

  const [value, setValue] = useState('');
  const cha = (e) => {
    setValue(e.target.value);
  }

  return (
    <div> 
      <hr></hr>
      <p>{R.current}</p>
      <button onClick={mult}>Ref변화</button>
      <hr></hr>
      <input type="text" ref={t_Ref} onChange={cha}/>
      <p>{t_Ref.current}</p>
    </div>
  );
}

export default App;
