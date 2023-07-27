import React from "react";
class Color extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className = "color"  style ={{backgroundColor : this.props.color}}
        onClick = {()=>{
          this.props.changeColor(this.props.color)
        }}
      ></div>
    )
  }
}
export default Color;