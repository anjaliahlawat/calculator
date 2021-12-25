import React, { useState } from 'react';
import OutputComponent from './OutputComponent';
import NumericKeypadComponent from './NumericKeypadComponent';

function CalculatorComponent() {
  const operators = ["+", "-", "x", "/"];

  const [outputVal, setOutputVal] = useState("");
  const [expression, setExpression] = useState([]);
  const [error, setError] = useState(false);

  const storeExpression = (val) => {
    // checking if val is "=", then we will parse the expr and return output
    if(val === "=") {
      parseExpr();
    }
    else if(val === "DEL") {
      let arr = outputVal.split("");
      if(arr.length > 0 ) {
        arr.pop();
        setOutputVal(arr.toString().replaceAll(/,/ig, ""));
      }
      setError(false);
    }
    else if(val === "RESET") {
      setExpression([]);
      setOutputVal("");
      setError(false);
    }
    else {
      const expr = [...expression];
      expr.push(val);
      setExpression(expr);
      setOutputVal(expr.toString().replaceAll(/,/ig, ""));
    }
  }

  const parseExpr = () => {
    let expr = [...expression];
    let finalVal = "" 

    if(isValidExpr(expr)) {
      let operand1 = "";
      let operand2 = "";
      let operator = "";

      while (expr.length > 0) {
        while (!operators.includes(expr[0])) {
            operand1 += expr.shift();
        }
        operator = expr.shift();
  
        while (!operators.includes(expr[0])) {
          operand2 += expr.shift();
          if (expr.length === 0) {
            break;
          }
        }
        finalVal = applyOperator(operand1, operator, operand2);
        setOutputVal(finalVal);
      }
    }
    else {
      setError(true);
    }
    expr = [finalVal];
    setExpression(expr);
  }

  const applyOperator = (operand1, operator, operand2) => {
    let result = 0;
    switch(operator) {
      case "+" :
        result = parseInt(operand1) + parseInt(operand2);
        break;
      case "-":
        result = parseInt(operand1) - parseInt(operand2);
        break;
      case "x":
        result = parseInt(operand1) * parseInt(operand2);
        break;
      case "/":
        result = parseInt(operand1) / parseInt(operand2);
        break;
      default:
        result = null;
        break;
    }
      return result;
  }

  const isValidExpr = (expr) => {
    const startElem = expr[0];
    const endElem = expr[expr.length -1];
    if (expr.length > 0 && !operators.includes(startElem) && !operators.includes(endElem) && endElem !== "." && expr.length > 1) {
      return true;
    }
    return false;
  }

  return (
    <div className="container-fluid calculator-comp">
      <div className="row header">
        <p className="header">calc</p>
        {error && <p className="error"> Invalid expr</p>}
      </div>
      <div className="row row1">
        <OutputComponent expr={outputVal} />
      </div>
      <div className="row row2 mt-3">
        <NumericKeypadComponent onKeyPress={storeExpression} />
      </div> 
    </div>
  );
}

export default CalculatorComponent;
