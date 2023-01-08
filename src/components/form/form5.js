import React, { useState } from 'react'

const Form5 = () => {

   const [user, setUser] = useState({ name: "", email: "", country: "", phone: "", password: "" })
   const { name, email, country, phone, password } = user;


   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
   }
   return (
      <div className='form-area'>
         <h1 className='section-title'>Welcome Our Sign Up page</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" name='name' id='name' placeholder='Enter your Name' value={name} onChange={handleChange} required />
            <input type="email" name="email" id="email" placeholder='Enter your Email' value={email} onChange={handleChange} required />
            <input type="text" name='country' id='country' placeholder='Enter your Country' value={country} onChange={handleChange} required />
            <input type="tel" name="phone" id="phone" placeholder='Enter your Phone' value={phone} onChange={handleChange} required />
            <input type="password" name="password" id="password" placeholder='Enter your Password' value={password} onChange={handleChange} required />
            <input type="submit" value="Sign Up" />
         </form>
      </div>
   )
}

export default Form5;
