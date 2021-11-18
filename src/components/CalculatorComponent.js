import React, { useState } from 'react';
import OutputComponent from './OutputComponent';
import NumericKeypadComponent from './NumericKeypadComponent';

function CalculatorComponent(props) {
  const allowedOps = ["+", "-", "*", "/"];

  const [outputVal, setOutputVal] = useState();
  const [expression, setExpression] = useState(new Set());

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
      const set = expression;
      set.add(val);
      setExpression(set);
    }
    parseOutput()
  }

  const parseExpr = () => {
    const expr = expression; 
    expr.forEach (function(value) {
      
    })
  }

  const parseOutput = () => {
    
  }

  return (
    <div className="calculator-comp">
      <OutputComponent value={outputVal} />
      <NumericKeypadComponent onKeyPress={(e) => storeExpression(e.target.value)} />
    </div>
  );
}

export default CalculatorComponent;
