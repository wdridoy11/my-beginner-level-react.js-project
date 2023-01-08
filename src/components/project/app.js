import React, { Component } from 'react'
import Home from './home'
import Login from './login'
import style from './app.css'

export default class app extends Component {
   constructor(props) {
      super(props)

      this.state = {
         isLogin: true
      }
   }

   render() {
      let { isLogin } = this.state;
      return (
         <div>
            {isLogin ? <Home /> : <Login />}
         </div>
      )
   }
}
