import { useRef } from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function Demo() {
  const formRef = useRef(null);
  const signupRef = useRef(null)

  const onSubmit = (event, arg) => {
    event.preventDefault();
    console.log("onsubmit", arg);
  };

  return (
    <div className="container">
      <Signin
        ref={formRef}
        onSubmit={onSubmit}
      />
      <Signup
        ref={signupRef}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Demo;
