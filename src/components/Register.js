import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='register'>
        <h1>World Bank Registration</h1><br></br><br></br>
        <form>
            <label>First name : </label>
            <input type='text' placeholder='Enter the firstname' />
            <label>Last name : </label>
            <input type='text' placeholder='Enter the lastname' />
            <label>email : </label>
            <input type='email' placeholder='Enter the email' />
            <label>Branch : </label>
            <input type='text' placeholder='Enter the branch' />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register