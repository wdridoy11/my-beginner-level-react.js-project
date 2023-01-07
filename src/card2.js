import React, { Component } from "react";
class Card2 extends Component {
   render() {
      let { name, description } = this.props;
      return (
         <div>
            <h1>Hello Bangladesh</h1>
            <h3> {name}</h3>
            <p>{description}</p>
         </div>
      )
   }
}
export default Card2;