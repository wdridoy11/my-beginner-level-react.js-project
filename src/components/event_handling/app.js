import React, { Component } from 'react'

export default class app extends Component {
   constructor(props) {
      super(props)

      this.state = {
         changeValue: ""
      }
   }


   handleChange = (e) => {
      this.setState({
         changeValue: e.target.value
      }, () => {
         console.log(this.state.changeValue);
      })
   }
   render() {
      return (
         <div>
            <input onChange={this.handleChange} type="text" placeholder='Enter your text' />
            <p>{this.state.changeValue}</p>
         </div>
      )
   }
}
