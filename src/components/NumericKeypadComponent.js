import React from 'react';
import ButtonComponent from './ButtonComponent';

function NumericKeypadComponent({onKeyPress}) {
  const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "3", "2", "1", "-", ".", "0", "/", "x"];
  return (
    <div className="row p-2">
      {keys.map((keyName, key) =>{
        return (
          <div className="col-lg-3 button-div">
            <ButtonComponent keyName={keyName} onKeyPress={onKeyPress}/>
          </div>
        )
      })}
      <div className="col-lg-6 button-div">
        <ButtonComponent keyName={"RESET"} onKeyPress={onKeyPress}/>
      </div>
      <div className="col-lg-6 button-div">
        <ButtonComponent keyName={"="} onKeyPress={onKeyPress}/>
      </div>
    </div>
  );
}

export default NumericKeypadComponent;