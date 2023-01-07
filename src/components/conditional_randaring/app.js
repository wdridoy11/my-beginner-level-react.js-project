import React, { Component } from 'react'
import Home from './home'
import Login from './login'


export default class app extends Component {
   constructor(props) {
      super(props)

      this.state = {
         isLogin: true
      }
   }



   render() {
      let { isLogin } = this.state;
      //============== step one
      // if (isLogin) {
      //    return <Home />
      // } else {
      //    return <Login />
      // }
      //================== step two
      //    let element;
      //    if (isLogin) {
      //       element = <Home />
      //    } else {
      //       element = <Login />
      //    };
      //    return (
      //       <div>
      //          {element}
      //       </div>
      //    )
      // }
      //================== step three
      // return (
      //    <div>
      //       {isLogin ? <Home /> : <Login />}
      //    </div>
      // )
      //================== step four
      return (
         <div>
            {isLogin && <Home />}
         </div>
      )
   }
}