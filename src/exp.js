// import React from "react";
// class exp extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count : 0
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>React Example Counter</h1>
//         <h3>{this.state.count}</h3>
//         <button onClick ={(e)=>{
//           console.log("event is ",e);
//           this.setState({
//             count : this.state.count+1
//           })
//         }}>Increment</button>
//       </div>
//     )
//   }
// }
// export default exp;

//-------------------------------------------------------------------
import React from "react";

const exp=(props)=>{
  return(
    <>
    <h1>{props.firstName}</h1>
    </>
  )
}
export default exp;