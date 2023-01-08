import React, { useState } from 'react'


const App = () => {

   const [user, setUser] = useState({ name: "", email: "", password: "" })
   const { name, email, password } = user;
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user)
   }

   const handleNameChange = (e) => {
      setUser({ name: e.target.value, email, password })
   }
   const handleEmailChange = (e) => {
      setUser({ name, email: e.target.value, password })
   }
   const handlePasswordChange = (e) => {
      setUser({ name, email, password: e.target.value })
   }

   return (
      <div>
         <div className="form-area">
            <h1>Login form</h1>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="name">Name: </label>
                  <input type="text" name='name' id='name' value={name} onChange={handleNameChange} required />
               </div>
               <div>
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />
               </div>
               <div>
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required />
               </div>
               <input type="submit" value="Login" />
            </form>
         </div>
      </div>
   )
}

export default App
