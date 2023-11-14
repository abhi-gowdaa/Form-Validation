import React, { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formISValid,setFormISValid]=useState(false)
  


  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
   
  useEffect(()=>{
    if(enteredNameIsValid){
      setFormISValid(true)
    }
    else {
      setFormISValid(false)
    }
  },[enteredNameIsValid]);
 

  const nameInputChangeHandler = (event) => {
    //every keyStroke Validation
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    //out of focus Validation
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    //on form submit Validation
    event.preventDefault();

    setEnteredNameTouched(true); //if the form is sub then it must be touched

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          //  autoComplete="off"
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formISValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
