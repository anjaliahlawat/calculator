import React from 'react';

function ButtonComponent({keyName, onKeyPress}) {
  const setKeyClassName = (keyName) => {
    if(keyName === "DEL")
      return "del";
    else if(keyName === "RESET")
      return "reset";
    else if(keyName === "=")
      return "equal";
  }
  return (
    <button className={`key-buttons ${setKeyClassName(keyName)}`} onClick={onKeyPress}>
      {keyName}
    </button>
  );
}

export default ButtonComponent;