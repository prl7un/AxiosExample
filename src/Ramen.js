import React, {memo} from "react";

const Ramen = ({name, o}) => {
  return(
    <div style = {{ border: '2px solid green', padding: '15px'}}>
      <p>이름: {name}라면</p>
      <button onClick={o}>주문</button>
    </div>
  );
};

export default memo(Ramen);