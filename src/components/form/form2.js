import React, { useState } from 'react'


const App = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
      console.log("Form is submitted !");
      let userInfo = {
         name,
         email,
         password

      }
      console.log(userInfo);

      e.preventDefault();
   }
   const handleNameChange = (e) => {
      setName(e.target.value);
   }
   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   }
   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
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
                  <input type="password" name="password" value={password} onChange={handlePasswordChange} id="password" />
               </div>
               <input type="submit" value="Login" />
            </form>
         </div>
      </div>
   )
}

export default App
