import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <>
      <div className="loginSignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className='loginsignup-field'>
            <input type="text" placeholder='Name' />
            <input type="password" placeholder='Password' />
            <input type="email" placeholder='Email Address' />
          </div>
          <button>
            Continue
          </button>
          <p className="loginsignup-login">
            Already have an account? <span>Log in</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>
              By continuing, I agree to the term of use & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
