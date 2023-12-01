import { useState, forwardRef } from 'react';
import TextInput from "./TextInput";

const Signup = forwardRef(function Signup({ onSubmit }, ref) {
  const [inputs, setInputs ] = useState({
    name: "",
    nickName: "",
    email: "",
    sex: "",
    password:"",
    password_confirmation: ""
  });

  const onChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };


  return (
    <>
      <h1 className="header">Sign up</h1>
      <form className="form"
        onChange={onChange}
        onSubmit={(e) => onSubmit(e, inputs)}
        ref={ref}
      >
        <TextInput
          name="name"
          type="text"
          label="Имя"
          size="sm"
          radius="sm"
          required
        />

        <TextInput
          name="nickName"
          type="text"
          label="Ник"
          size="sm"
          radius="sm"
        />
        <TextInput
          name="email"
          type="email"
          label="Почта"
          size="sm"
          radius="sm"
          icon
          required
        />
        <div>
          <p>Пол:</p>
          <label>
            <input type="radio" name="sex" value="male" />
            Мужской
          </label>
          <label>
            <input type="radio" name="sex" value="female" />
            Женский
          </label>
        </div>

        <TextInput
          name="password"
          type="password"
          label="Пароль"
          size="sm"
          radius="sm"
          required
        />
        <TextInput
          name="password_confirmation"
          type="password"
          label="Повторить пароль"
          size="sm"
          radius="sm"
          required
        />

        <button type="submit"
          className={`form-button 
            ${inputs.password !== inputs.password_confirmation && 'disabled'}
          `} 
        >
          Зарегистрироваться
        </button>
      </form>    
    </>
  )
});

export default Signup;