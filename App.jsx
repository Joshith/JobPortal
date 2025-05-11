
import React, { Component } from 'react'
import './App.css';
import { callApi } from './api';

export default class App extends Component {
  constructor()
  {
    super();
    this.getRegistration=this.getRegistration.bind(this);
    
  }

  signinfunction()
  {
     let popup=document.getElementById("popup");
     popup.style.display="block";
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    signin.style.display='block';
    signup.style.display='none';
    let login=document.getElementById("login");
    login.innerHTML="Login here";
    
  }
  signupfunction()
  {
     let popup=document.getElementById("popup");
     popup.style.display="block";
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    signin.style.display='none';
    signup.style.display='block';
    let login=document.getElementById("login");
    login.innerHTML="Registration Page";
  }



  closefunction(event)
  {
    if(event.target.id==="popup")
    {
    let popup=document.getElementById("popup");
     popup.style.display="none";
    }
  }
 getRegistration()
 {
 
  var data=JSON.stringify({
    fullname:fullname.value,
    email:email.value,
    password:signuppassword.value,
    role:role.value
  });
  callApi("POST","http://localhost:8085/user/save",data,this.getResponse);
  
 }
 getResponse(res)
 {
 alert(res)

 }

  render() {

    return (
      <div id="container">   
        <div id="popup" onClick={this.closefunction}>
          <div id="popupwindow">
            <div id="login">Login</div>
            <div id="signin">
              <label id='username' >Username</label>
              <input type='text'></input>
              <label id="password">Password</label>
              <input type='password'></input>
              <div id='forget'>Fortgot <span>Password</span></div>
              <button id="submit">Submit</button>
              <div id='div1'></div>
              <div id="div2">No Account.<span onClick={this.signupfunction}>Register here</span></div>
            </div>
            <div id='signup'>
            <label>Full Name</label>
            <input type='text' id='fullname'></input>  

            <label>Email</label>
            <input type='text' id='email'></input>  

            <label>Select Role</label>
            <select id='role'>
              <option value=''></option>
              <option value='1'>Admin</option>
              <option value='2'>Employer</option>
              <option value='3'>JobSeeker</option>
            </select>
            <label>Password</label>
            <input type='password' id='signuppassword'></input>  
            <label>Confirm Password</label>
            <input type='password' id='confirmpassword'></input>
            <button id='submit' onClick={this.getRegistration}>Register</button>
            <div>Already have an account. <span onClick={this.signinfunction}>SignIn</span></div>

            </div>


            </div>
         </div>       
        <div id="header">
          <img className='logo' src='/logo.png' alt='noimage' />
          <label className="logotext"><span>Job</span> Portal</label>
          <img className='signinlogo' src='user.png' alt='error' onClick={this.signinfunction}></img>
          <label className='signinlabel' onClick={this.signinfunction} >SignIn</label>

        </div>
        <div id="content">
          <label className='label1'>India's Job Portal</label> <br/>
          <div className='label2'>Search for Jobs</div>
          <label className='label3'>Find your dream job</label>
        <div className='searchbar'>
          <input className='text1' type='text' placeholder='Enter for job'></input>
          <input className='text2' type='text'placeholder='Enter data'></input>
          <button className='button1'>Search Jobs</button>
        </div>


        </div>
        <div id='footer'>
          <label className='reserve'>All rights reserved</label>
          <img className='imgicon' src='facebook.png' alt='error' />
          <img className='imgicon' src='twitter.png' alt='error' />
          <img className='imgicon' src='linkedin.png' alt='error' />
        </div>
      </div>
    )
  }
}
