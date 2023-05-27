import  {useState, useEffect} from 'react';


function useSalary(person ,num){
  let mon = num;
  const [year, setYear] = useState(mon);

  useEffect(() => {setYear(mon*12)}, []);
  
  return [person, mon, year];
}

export default useSalary;