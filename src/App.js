import React from 'react';
import useSlary from './useSalary'


function App() {
  const [person1 ,mon1, year1] = useSlary('A', 200);
  const [person2 ,mon2, year2] = useSlary('B', 300);
  return (
    <div>  
      <label>
        information:
        <p>{person1}의 월급 {mon1}, 연봉 {year1}</p>
      </label>
      <label>
        information:
        <p>{person2}의 월급 {mon2}, 연봉 {year2}</p>
      </label>
    </div>
  );
}

export default App;
