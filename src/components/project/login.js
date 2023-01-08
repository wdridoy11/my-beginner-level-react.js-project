import React from 'react'

const login = () => {
   return (
      <div className='form'>
         <div className="form-area">
            <h1 className='section-title'>Welcome to Our Login Page</h1>
            <form>
               <input type="text" placeholder='Enter your name' />
               <input type="email" name="email" id="email" placeholder='Enter you email' />
               <input type="password" placeholder='Enter your password' />
               <input type="submit" value="Login" />
            </form>
         </div>
      </div>
   )
}

export default login