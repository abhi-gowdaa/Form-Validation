import { useState } from "react";


const useInput=(validateValue)=>{

const [enteredValue, setEnteredValue] = useState("");
const [IsTouched, setIsTouched] = useState(false);


const valueIsValid = validateValue(enteredValue);
const hasError = !enteredValue && IsTouched;


const valueChangeHandler = (event) => {
    //every keyStroke Validation
    setEnteredValue(event.target.value);
  };

  const InputBlurHandler = (event) => {
    //out of focus Validation
    setIsTouched(true);
  };

const reset=()=>{
    setEnteredValue('');
    setIsTouched(false);
}


return{
value:enteredValue,
isValid:valueIsValid,
reset,
hasError,
valueChangeHandler,
InputBlurHandler

}
}


export default useInput;