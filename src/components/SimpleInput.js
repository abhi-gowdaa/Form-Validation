import React, { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enterNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => { //every keyStroke Validation
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  useEffect(() => {
    if (enterNameIsValid) {
      console.log("Name Input is valid ");
    }
  }, [enterNameIsValid]);


  const nameInputBlurHandler = (event) => { //out of focus Validation
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmitHandler = (event) => { //on form submit Validation
    event.preventDefault();

    setEnteredNameTouched(true); //if the form is sub then it must be touched

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    // nameRef.current.value='';
    setEnteredName("");
  };

  const nameInputIsValid = !enterNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
