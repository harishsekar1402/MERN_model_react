import React, { useState } from 'react';
import './Register.css'
function Register() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [branch, setbranch] = useState('');

  const handlefirstnameChange = (event) => {
    setfirstname(event.target.value);
  };

  const handlelastnameChange = (event) => {
    setlastname(event.target.value);
  };

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };
  const handlebranchChange = (event) => {
    setbranch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('firstname:', firstname);
    console.log('lastname:', lastname);
    console.log('email :', email);
    console.log('branch :',branch )
  };

  return (
    <div className='register'>
        <h1>World bank Registeration</h1>
        <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input type="text" value={firstname} onChange={handlefirstnameChange}  placeholder='Enter the firstname'/>
      
        <label>lastname:</label>
        <input type="text" value={lastname} onChange={handlelastnameChange}  placeholder='Enter the lastname'/>
      
        <label>email:</label>
        <input type="email" value={email} onChange={handleemailChange}  placeholder='Enter the email'/>
       
        <label>Branch:</label>
        <input type="text" value={branch} onChange={handlebranchChange} placeholder='Enter the branch'/>
      
      
      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default Register;
