import './App.css';
import React, {useState} from 'react';

import Input from "./component/Input/Input"
import Button from "./component/Button/Button"
import "./App.css"
import GitHub from "./component/GitHub/GitHub"
import {BounceLoader} from "react-spinners"
import Google from "./svg/google.svg"
import Form from "./component/Form/Form"


function App() {

  const [spinner, setSpinner] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [userForm, setUserForm] = useState({
    userName : "",
    password : ""
  })

  const onValidation = () =>{
    if(userForm.userName === "" || userForm.password === "")
    {
      alert("User Name or Password can not be blank!")
    }
    else if(userForm.userName === "julioMenaAcosta" && userForm.password === "123456")
    {
      console.log(userForm)
      setSpinner(true)
      setTimeout(()=>{
        setIsActive(true)
        setSpinner(false)
      }, 3000)
    }
    else{
      alert("User Name or Password is incorrect!")
    }
  }
    
  return (
    <div className='custom-page'>
      {isActive ? (
        <Form>
          <GitHub name={userForm.userName} />
        </Form>
      ) : (
        <Form>
          <h2 style={{color : "darkred"}}>Login</h2>
          {spinner ? (
            <>
              <BounceLoader cssOverride={{ margin : "30px auto"}}
              size="80"
              color="red" />
              <br />
              <h2>Checking in...</h2>
              <br />
              <p>Please wait...</p>
            </>

          ) : (
            <>
              <Input 
                type="email"
                value={userForm.userName}
                placeholder={"User Name"}
                onChange={(e)=> setUserForm({...userForm, userName : e.target.value})} />

              <Input 
                type="password"
                value={userForm.password}
                placeholder={"Password"}
                onChange={(e)=> setUserForm({...userForm, password : e.target.value})} />

              <Button type="submit" text="submit" onClick={onValidation} />
                <br />
                <br />
                <hr />
                <p style={{color : "gray"}}>or login with</p> {" "}
                <button className='google'>
                  { " " }
                  <img src={Google} alt="google" style={{width : "30px" }}/>
                </button>

            </>
          )}
        </Form> ) } 
      
    </div>
  );
  
}

export default App;
