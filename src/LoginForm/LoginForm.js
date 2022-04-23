//email:eve.holt@reqres.in      
//password:cityslicka
//npm start
//change file location to loginform
//If depenencies missing install 
//Need Logout page
//Boostrap
//https://react-bootstrap.github.io/getting-started/introduction/
//If require add register maybe if we have time
//Npm installed completed
//npm install react-bootstrap bootstrap
//'Button' is declared but its value is never read.ts(6133)
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginToAccount } from "../slices/loginSlice";
//React uses virtual DOM to compare the new state of the DOM tree with the old state
//useNavigate is a hook that allows us to navigate to a new route
//useNavigate === useHistory
export const LoginForm = () => {                                               
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)

  const handleLogin = () => {
    dispatch(loginToAccount({email, password}));
    setEmail("");
    setPassword("");
  }

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        enabled={email.length === 0 || password.length === 0}
        onClick={() => handleLogin()}
      >
        Login
      </button>

      <button 
      enabled={email.length === 0 || password.length === 0}
      onClick={() => handleLogin()}>
         Logout
      </button>

    </div>
  );
  //username = 'bobby' - WRONG
  return form;
};
