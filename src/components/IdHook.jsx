import { useId } from "react";

const Form = () => {
  const formId = useId();

  return (
    <>
      <form>
        <label htmlFor={formId + 'firstname'}>First Name</label>
        <input id={formId + 'firstname'}/>

        <label htmlFor={formId + 'lastname'}>Last Name</label>
        <input id={formId + 'lastname'}/>
      </form>
    </>
  )  
}

export default Form;
