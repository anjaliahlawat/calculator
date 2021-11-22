import React, { useState } from 'react';
import OutputComponent from './OutputComponent';
import NumericKeypadComponent from './NumericKeypadComponent';

function CalculatorComponent(props) {
  const allowedOps = ["+", "-", "*", "/"];

  const [outputVal, setOutputVal] = useState();
  const [expression, setExpression] = useState([]);

  const storeExpression = (val) => {
    // checking if val is "=", then we will parse the expr and return output
    if(val === "=") {
      parseExpr();
    }
    else if(val === "DEL") {
      setExpression(new Set());
    }
    else if(val === "RESET") {
      setExpression(new Set());
    }
    else {
      const expr = [...expression];
      expr.push(val);
      setExpression(expr);
    }
    parseOutput()
  }

  const parseExpr = () => {
    const expr = [...expression]; 
    // expr.forEach (function(value) {
    //   if(val)
    // })
  }

  const parseOutput = () => {

  }

  return (
    <div className="container-fluid calculator-comp">
      <div className="row row1">
        <OutputComponent value={outputVal} />
      </div>
      <div className="row row2 mt-3">
        <NumericKeypadComponent onKeyPress={(e) => storeExpression(e.target.value)} />
      </div> 
    </div>
  );
}

export default CalculatorComponent;
