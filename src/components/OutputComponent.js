import React from 'react';

function OutputComponent({expr}) {
  return (
    <div className="col-lg-12 p-2 output">
      <p>{expr}</p>
    </div>
  );
}

export default OutputComponent;