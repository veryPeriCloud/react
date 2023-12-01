import { useState, forwardRef } from 'react';
import TextInput from "./TextInput";

const Signin = forwardRef(function Signin({ onSubmit }, ref) {
  const [inputs, setInputs ] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      <h1 className="header">Sign in</h1>
      <form className="form"
        onChange={onChange}
        onSubmit={(e) => onSubmit(e, inputs)}
        ref={ref}
      >
        <TextInput
          name="email"
          type="email"
          label="E-mail"
          required
          placeholder="Enter your e-mail"
          size="sm"
          radius="xs"
          icon
        />

        <TextInput
          name="password"
          type="password"
          label="Password"
          required
          placeholder="Enter your password"
          size="sm"
          radius="xs"
        />

        <button type="submit"
          className={`form-button`} 
        >
          Войти
        </button>
      </form>    
    </>
  )
});

export default Signin;