import React from 'react'


const app = () => {
   const handleSubmit = (e) => {
      console.log("Form is submitted !");
      e.preventDefault();
   }
   const handleNameChange = (e) => {
      console.log(e.target.value)
   }
   const handleEmailChange = (e) => {
      console.log(e.target.value)
   }
   const handlePasswordChange = (e) => {
      console.log(e.target.value)

   }
   return (
      <div>
         <div className="form-area">
            <h1>Login form</h1>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="name">Name: </label>
                  <input type="text" name='name' id='name' onChange={handleNameChange} required />
               </div>
               <div>
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email" onChange={handleEmailChange} required />
               </div>
               <div>
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" onChange={handlePasswordChange} id="password" />
               </div>
               <input type="submit" value="Login" />
            </form>
         </div>
      </div>
   )
}

export default app
