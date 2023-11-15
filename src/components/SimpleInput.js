import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    InputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    InputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@")); // this is for validation , think to understand or compare it with old 

  let formISValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formISValid = true;
  }

  const formSubmitHandler = (event) => {
    //on form submit Validation
    event.preventDefault();

    // setEnteredNameTouched(true); //if the form is sub then it must be touched

    if (!enteredName) {
      return;
    }

    console.log(enteredName);

    resetNameInput(); //diff reset for diff input even it uses same hook
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          //  autoComplete="off"
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formISValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
