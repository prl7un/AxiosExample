import { useState} from "react";


function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random()*30));
  const [second, setSecond] = useState(Math.ceil(Math.random()*30));
  const [value, setValue] = useState('');
  var [result, setResult] = useState('');  

  return (
    <div> 
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (parseInt(value) === first*second){
          setResult('정답')
          setFirst(Math.ceil(Math.random()*30));
          setSecond(Math.ceil(Math.random()*30));
          setValue('')
        }
        else{
          setResult('오답')
          setValue('')
        }
      }}>  
        <input type = "number" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
