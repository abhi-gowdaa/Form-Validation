
import {useHook} from '../hooks/useInput'

const BasicForm = (props) => {

const {value:enteredFirstName,
hasError:firstNameHasError,
valueIsValid:firstNameIsValid,
InputChangeHandler:firstNameChangeHandler,
InputBlurHandler:firstNameBlurHandler,
reset:resetFirstName

}=
         useHook((value)=>value.trim()!=='');

  const {value:enteredEmail,
    hasError:emailHasError,
    valueIsValid:emailIsValid,
    InputChangeHandler:emailChangeHandler,
    InputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
                      }=useHook((value)=>value.includes('@'));



let formISValid=false

if(emailIsValid && firstNameIsValid){
  formISValid=true
}



  const formSubmitHandler=(event)=>{

event.preventDefault();


if(!emailIsValid){
  return;
}
// console.log(enteredEmail);

resetEmailInput();
resetFirstName();

}


  const emailInputClasses=emailHasError ? 
  'form-control invalid' : 
  'form-control';

  const firstNameInputClasses=firstNameHasError ?
  'form-control invalid' :
  'form-control';


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={firstNameInputClasses}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
           type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} 
            value={enteredFirstName}
            />

            {firstNameHasError && <p>First Name is Empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler} 
        type='text'
         id='name' 
         value={enteredEmail}
         />

      {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formISValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
