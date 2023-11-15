import {useState} from 'react';



export const useHook=(validateValue)=>{

    const [enteredValue,setEnteredValue]=useState('');
    const [isTouched,setIsTouched]=useState(false);


    const valueIsValid=validateValue(enteredValue);
    const hasError=!valueIsValid && isTouched;

    const InputChangeHandler=(event)=>{
        setEnteredValue(event.target.value)
      }

    const InputBlurHandler=(event)=>{
        setIsTouched(true);
        console.log("yes")
      }

      const reset=()=>{
        setEnteredValue('');
        setIsTouched(false);
      }




    return{
     value:enteredValue,
     hasError,
     valueIsValid,
     InputBlurHandler,
     InputChangeHandler,
     reset




    }
}
