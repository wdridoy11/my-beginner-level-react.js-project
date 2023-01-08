import React, { Component } from 'react'

import Home from './Home'
import Login from './Signup'
import Style from './css/style.css'
import Style1 from './signup.css'

export default class app extends Component {

   constructor(props) {
      super(props)

      this.state = {
         isLogin: true
      }
   }

   render() {
      const { isLogin } = this.state;
      return (
         <div>
            {isLogin ? <Home /> : <Login />}
         </div>
      )
   }
}
