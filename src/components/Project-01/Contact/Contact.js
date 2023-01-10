import React, { useState } from 'react'

const Contact = () => {

   const [user, setUser] = useState({ name: "", email: "", password: "", subject: "", message: "" })
   const { name, email, password, subject, message } = user;
   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
   }
   return (
      <>
         <div className="contact">
            <div className="contact-from">
               <h1>Welcome Sign Up Page</h1>
               <form onSubmit={handleSubmit}>
                  <input type="text" name='name' id='name' placeholder='Enter your Name' value={name} onChange={handleChange} required />
                  <input type="email" name='email' id='email' placeholder='Enter your Email' value={email} onChange={handleChange} required />
                  <input type="password" name='password' id='password' placeholder='Enter your Password' value={password} onChange={handleChange} required />
                  <input type="text" name='subject' id='subject' placeholder='Enter your Subject' value={subject} onChange={handleChange} required />
                  <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' value={message} onChange={handleChange}></textarea>
                  <input type="submit" id="sign-up" value="Sign Up" />
               </form>
            </div>
         </div>
      </>
   )
}

export default Contact