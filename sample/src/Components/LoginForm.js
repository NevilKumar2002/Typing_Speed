// import React from "react";
// import LoginFormDetails from "./LoginFormDetails.js";

// function loginFormDetails1(){
//     let rrot=document.getElementById("root");
//     const div= document.createElement("div");
//     div.innerText="Nevil Kumar";
//     rrot.append(div)

// }

// const LoginForm=()=>{

//     return(
//         <div>
//             <button onClick={LoginFormDetails}>SignUp/ Sign in</button>
            
           
//         </div>
//     )
// }

// export default LoginForm;
import {useState} from 'react';

export default function LoginForm() {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);

  };
  const handleClick1 = event => {
    setIsShown1(current => !current);
  };
  return (
    <div>
      <button  className="SignIn-btn" onClick={handleClick}>SignIn</button>
      <button  className="SignIn-btn" onClick={handleClick1}>SignUp</button>

      <div style={{display: isShown ? 'block' : 'none'}}>
        <div className='signIn-form'>
        <h2 style={{textAlign:"center"}}>Sign in</h2>
       <form >
       <div className='email-div'>
       <label for ="email">Email</label>
        <input type="text" placeholder='Enter Your Email' required />
       </div>
        <br></br>
       <div className='email-div'>
       <label for ="password">Password</label>
        <input type="password" placeholder='Enter Your password' required />
       </div>
        <br></br>
        <button type="submit" >Submit</button>
       </form>
      </div>
        </div>
        <div style ={{display:isShown1? 'block':'none'}}>
        <div className='signUp-form'>
        <h2 style={{textAlign:"center"}}>Sign in</h2>
       <form >
       <div className='email-div'>
       <label for ="email">Email</label>
        <input type="text" placeholder='Enter Your Email' required />
       </div>
       <br></br>
       <div className='email-div'>
       <label for ="email">Confirm Email</label>
        <input type="text" placeholder='confirm Your Email' required />
       </div>
        <br></br>
        
       <div className='email-div'>
       <label for ="password">Password</label>
        <input type="password" placeholder='Enter Your password' required />
       </div>
        <br></br>
        <div className='email-div'>
       <label for ="password">Confirm Password</label>
        <input type="password" placeholder='Confirm Your Password' required />
       </div>
       <br></br>
        <button type="submit" >Submit</button>
       </form>
      </div>
        </div>
    
    </div>
  );
}
