import React, { useState } from 'react'

const Signup = () => {

   const [user, setUser] = useState({ name: '', email: '', password: '', phone: '' })
   const { name, email, password, phone } = user;

   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
   }

   return (
      <div id='form'>
         <div className='form-area'>
            <h1 className='form-title'>Welcome Sign Up page</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" name='name' id='name' placeholder='Enter your Name' value={name} onChange={handleChange} required />
               <input type="email" name="email" id="email" placeholder='Enter your Email' value={email} onChange={handleChange} required />
               <input type="password" name="password" id="password" placeholder='Enter your Password' value={password} onChange={handleChange} required />
               <input type="tel" name="phone" id="phone" placeholder='Enter your Phone' value={phone} onChange={handleChange} />
               <input type="submit" value="Sign Up" />
            </form>
         </div>
      </div>
   )
}

export default Signup
