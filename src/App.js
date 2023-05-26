import React, { useCallback, useState } from 'react';
import Ramen from './Ramen'
import Gimbab from './Gimbab';

function App() {
  const [orderNumber, setOrderNumber] = useState(0);

  const incrementOrderNumber = () => {
    setOrderNumber(orderNumber + 1);
  };

  
  const order = useCallback(()=>{
    console.log('주문완료');
  }, []);
  
  return (
    <div style ={{ border: '2px solid grey', padding: '15px'}}>  
      <h1>메뉴판</h1> 
      <p>주문인원: {orderNumber}</p>
      <button onClick={incrementOrderNumber}>주문인원추가</button>

      <Ramen name={"치즈"} o={order}/>
      <Gimbab name={"새우"} o={order}/>
    </div>
  );
}

export default App;
