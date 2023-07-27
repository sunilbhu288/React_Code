// import React from "react";
// //for importing CSS , you only give to path of CSS file
// import "./App.css"
// class App extends React.Component{

//   //class will have always a render function
//   //state variable

//  constructor(){
//   super();
//   this.state = {
//     count : 0,
//     name : "sunil Patel"
//   };
//  }
//  render(){
//   //return whenever you want to show on the screen
//   return(

//     // <div>
//     // here we can use React.Fragment instead of div becouse React.Fragment wrapped code without taking extra space
//     // we can also write empty bracker like <> instead of <React.Fragment>
//       // <React.Fragment>

//       <>
//       <h1 className="something">Counter Application</h1>
//       <h3>{this.state.count}</h3>
//       <h4>My name is: {this.state.name}</h4>
//       <button onClick = {(e)=>{
//         console.log("event is",e);

//         //In react you cant not directly mutate/change state variables , like  this.state.count++;
//         //special methode called setState
//         //setState is a function to which you pass an Object
//         //In object you only pass those properties that you want to change.

//         if(this.state.count <15){
//         this.setState({
//           count:this.state.count+1,
//           name : "Seth"

//         })
//       }
//       }}>Increament Counter</button>
//       <button onClick = {(e)=>{
//         console.log("event is:",e);
//         if(this.state.count>0){
//         this.setState({
//           count:this.state.count-1
//         })
//       }
//       }}>Decrement Counter</button>
//       {/* </React.Fragment> */}
//     {/* // </div> */}
//     </>
//   )
//  }
// }
// export default App;


//-----------------------------------------------------------------------------------------------------
//here we convert the arrays elements in the list form

// import React, { Component } from "react";
// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       clothes :["kurta","pant","shirt","T-shirt"],
//     }
//   }
//   render(){
//     return(
//       <>
//       <h1>Convert the hole arrays elements in the list</h1>
//       <ul>
//         {this.state.clothes.map(product=>{
//           return <li>{product}</li>
//         })}
//       </ul>
//       </>
//     )
//   }

// }
// export default App;




//--------------------------------------------------------------------------------------------------
// paint type problems here we have five colors when will click on which colors the background will be change according to color

// import React from "react";
// //For Importing CSS, you only need to give path of CSS File
// import "./App.css";
// class App extends React.Component {
//   //Class will always have a render function
//   //State Variables
//   constructor() {
//     super();
//     //State is always an object
//     this.state = {
//       products: ["Shoes", "TShirts", "Pants"],
//       selectedColor: "",
//     };
//   }

//   render() {
//     const colors = ["red", "yellow", "green", "blue", "pink"];
//     //return Whatever you want to show on the screen
//     return (
//       <div
//         style={{ height: "100vh", backgroundColor: this.state.selectedColor }}
//       >
//         {/* first Curly Brace Tells That you are writing JS and then in second one you pass an object */}
//         <div className="color-container" style={{ display: "flex" }}>
//           {colors.map((color) => {
//             return (
//               <div
//                 className="color"
//                 style={{ backgroundColor: color }}
//                 onClick={() => {
//                   this.setState({
//                     selectedColor: color,
//                   });
//                 }}
//               ></div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// // export default App;
// export default App;



//-------------------------------------------------------------------------------------
//Revision//
//-------//
// import React from "react";
// import "./App.css";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }
//   render(){
//     return(
//       <>
//       <h1>Counter Application</h1>
//       <h3>{this.state.count}</h3>
//        <button class="btn" onClick={(e)=>{
//         console.log("event is",e);
//         this.setState({
//           count:this.state.count+1
//         })
//        }}>Increment</button>

//        <button class="btn" onClick ={(e)=>{
//         console.log(e);
//         this.setState({
//           count : this.state.count-1,
//         })
//        }}>Decrement

//        </button>
//       </>
//     )
//   }
// }
// export default App;

//---------------------------------------------------------
// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       clothes : ["Kurta","Pant","T-Shirt","Jeans"],
//     }
//   }
//   render(){
//     return(
//       <>
//       <h3>Convert arrays elements in list....</h3>
//       <ul>
//         {this.state.clothes.map(product=>{
//           return <li>{product}</li>
//         })}
//       </ul>
//       </>
//     )
//   }
// }
// export default App;

//------------------------------------------------------------------------------------------------
// import React from "react";
// import Color from "./Color.js";
// function App(){
//   return (
//     <>
//     <Color name="sunil"/>
//     <Color name="Ankit"/>
//     <Color name="Rajiv"/>

//     </>
//   )
// }
// export default App;
// 


//------------------------------------------------------------------------------------------------------

// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//      <div id ="root">
//       <p>I am learning React. My life is getting better.</p>
//      </div>
//     )
//   }

//   }
//   export default App;

//-------------------------------------------------------------------------------------------

// import React from "react";
// import "./App.css";
// import Color from "./Color"

// class App extends React.Component{
//     constructor(){
//       super();
//       this.state={
//         selectedColor : ""
//       }
//     }
//     changeSelectedColor = (newColor)=>{
//       this.setState ({
//         selectedColor : newColor
//       })
//     }
//     render(){
//       const colors = ["red","blue","green","yellow"]
//       return(
//         <div style = {{height : "100vh" , backgroundColor : this.state.selectedColor}}>
//           <div className="color-container" style ={{display : "flex"}}>
//             {colors.map((color)=>{
//               return(
//                 <Color color ={color} changeColor = {this.changeSelectedColor}>

//                 </Color>
//               )
//             })}
//           </div>

//         </div>
//       )
//     }
// }
// export default App;

//---------------------------------------------------------------------------------
// use of hook  its like a function we can access the properties without write class
// in hook we use useState() function  here we no need to write the render

// import React, { useState } from "react";
// function App() {
//   // const countestate = useState(0)
//   // // we also write it in this form like const[count,setCount] = useState(0)
//   // const count = countestate[0]
//   // const setCount = countestate[1]

//   const[count,setCount] = useState(0)
//   function incrementCount(){
//     setCount(count+1)
//   }
  
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={incrementCount}>Incerement</button>
//     </>

//   )
// }
// export default App;


//----------------------------------------------------------------------
// import "./styles.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Home from "./component/Home";
// import NotFound from "./component/NotFound";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


//----------------------------------------------------------------------------
//In these case we see that message have changed after clicking button
// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       message : "Hello World....."
//     }
//   }
//   changeMessage(){
//     this.setState({
//       message : "Thank You For Subscription.........."
//     })
//   }
//   render(){
//     return(
//       <>
//        <h1>{this.state.message}</h1>
//        <button onClick = {()=>this.changeMessage()}>Subscription</button>
//       </>
//     )
//   }
// }
// export default App;

//---------------------------------------------------------------
//change the background color according to the which color button we clicked
// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       changeColor : "white"
//     }
//   }
//   redColor(){
//     this.setState({
//       changeColor : "red"
//     })
//   }
  
//   yellowColor(){
//     this.setState({
//       changeColor : "yellow"
//     })
//   }
//   render(){
//     return(
//       <div style = {{height : "100vh",backgroundColor:this.state.changeColor}}>
//         <div className = "container">
//          <button onClick = {()=>this.redColor()}>Red</button>
//          <button onClick = {()=>this.yellowColor()}>Yellow</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default App;

//------------------------------------------------------------------------------------

//props function are used from exp.js class...

// import React from "react";
// import Demo from "./component/Demo";
// class App extends React.Component{
//   render(){
//     return(
//       // <Demo  firstName = "Ankit"  lastName="Singh"/>
//       <Demo>
        
//       </Demo>
//     )
//   }
// }
// export default App;

//----------------------------------------------------------------------
//show live timer help of react

// 

// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count : ""
//     }
//   }
//   increment(){
//     for(let i=1;i<=5;i++){
//     this.setState({
//       count : this.state.count+1
//     })
//   }
// }
// decrement(){
//   for(let i=1;i<=5;i++){
//   this.setState({
//     count : this.state.count-1
  
//   })
// }
// }
//   render(){
//     return(
//       <>
//        {this.state.count}
//        <button onClick = {()=>this.increment()}>Next Page</button>
//        <button onClick = {()=>this.decrement()}>Prev Page</button>
//       </>
//     )
//   }
// }
// export default App;

//--------------------------------------------------------------------------------
// //Assignment proplems.............
// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       age:34
//     }
//   }
//   render(){
//     const name = "John Doe"
//     const enrollmentNo = 12345678;
   
//     return(
//       <>
//       <h1>Hello,my name is {name}</h1>
//       <p>I am {this.state.age} years old and my enrollment no is {enrollmentNo}</p>
//       <button onClick = {()=>{
//         this.setState({
//           age : this.state.age +1
//         })
//       }}>Click</button>
//       </>
//     )
//   }
// }
// export default App;
//-------------------------------------------------------------------------------------------------
//we can use more function under a single class  .......

// import React from "react";
// function App(){

//   function Demo(){
//     return(
//       <>
//       <p>This is Demo paragraph....</p>
//       </>
//     )
//   }
//   return(
//     <>
//     <h1>Hello World!</h1>
//     <User/>
//     <Demo/>
//     </>
//   )
// }
// class User extends React.Component{
//   render(){
//     return(
//       <>
//       <h2>This Heading from User Class</h2>
//       </>
//     )
//   }
// }
// export default App;

//----------------------------------------------------------------------------------------
//use of useState....

// import React, { useState } from 'react';
// function App() {
//   const [data, setData] = useState(null);
//   function getData(e) {
//     setData(e.target.value);
//   }

//   return (
//     <>
//       <input type="text" onChange={getData} />
//       <h1>{data}</h1>
//     </>
//   );
// }
// export default App;


//-------------------------------------------------------------------------
//addition of two comments using of useState...

// import React,{useState} from "react"
// function App(){
//   const [data,setData] = useState(null)
//   function changeData(e){
//     setData(e.target.value)
//   }
//   const [data2,setData2] = useState(null)
//   function changeData2(e){
//     setData2(e.target.value)
//   }
//   return(
//     < div style={{display : "flex"}}>
//     <input type="text" placeholder="Enter Number1" onChange={changeData}/>
//     {/* <h3>{data}</h3> */}
//     <h2>+</h2>
//     <input type="text" placeholder="Enter Number2" onChange={changeData2}/>
//     <h3>{parseInt(data) + parseInt(data2)}</h3>
//     </div>
//   )
// }
// export default App;


//----------------------------------------------------------------
//useState program
//if we want to print sentence after click button 

// import React,{useState} from "react";
// function App(){
//   const [data,setData]=useState(null)
//   function changeData(e){
//     setData(e.target.value)
//   }
//   const[print,printData] = useState(false)
//   return(
//     <>
//     <h2>Write here......</h2>
//     <input type="text" placeholder="Write Here" onChange={changeData}/>
//     <button onClick = {()=>printData(true)} >Click Here</button>
//     {print ? <h3>{data}</h3> : null}
//     </>
//   )
// }
// export default App; 

//--------------------------------------------------------------------------------

// if we want to show comment or data after click show button and hide after clicking the hide button
//with help of useState...

// import React from "react";
// import React,{useState} from "react";
// function App(){
//   const[status, setStatus] = useState(false)
//   return(
//     <>
//     <button onClick = {()=>setStatus(true)}>Show</button> 
//     <button onClick = {()=>setStatus(false)}>Hide</button>  
//     {status ? <h3>Welcome Here!</h3> : null}
//     </>
//   )
// }
// export default App;

//---------------------------
//if we want show and hide data trough only one button....
// import React,{useState} from "react";
// function App(){
//   const[status, setStatus] = useState(false)
//   return(
//     <>
//     <button onClick = {()=>setStatus(!status)}>Toggle</button>
//     {status ? <h3>Welcome !</h3> : null}
//     </>
//   )
// }
// export default App;

//-----------------------------------------------------------------------------------
//Handle the form .....

// import React,{useState} from "react";
// function App(){
//   const[name, setName] = useState("")
//   const[tnc , setTnc] = useState(false)
//   const[interest,setInterets] = useState("")
//   function getFormData(e){
//     console.log(name,tnc,interest)
//     e.preventDefault()
//   }
//   return(
//     <>
//     <h2>Handle the form....</h2>
//     <form onSubmit = {getFormData}>
//     <input type="text" placeholder = "enter name" onChange = {(e)=>setName(e.target.value)}/>
//     <br/><br/>
//     <select onChange = {(e)=>setInterets(e.target.value)}>
//       <option>Select Option</option>
//       <option>Car</option>
//       <option>Bike</option>
//       <option>Cycle</option>
//       </select>
//       <br/>
//       <br/>
//       <input type = "checkbox" onChange = {()=>setTnc(true)}/><span>Term and Conditions</span>
//       <br/>
//       <br/>
//       <button input type = "submit">Submit</button>
//      </form>
//     </>
//   )
// }
// export default App;


//-----------------------------------------------------------------------
// use Of ---  if and else condition using useState

// import React, {useState} from "react";
// function App(){
//   const [data, setdata] = useState(true)
//   if(data){
//     return(
//       <>
//       <h2>Welcome!</h2>
//       </>
//     )
//   }
//   else{
//     return(
//       <>
//       <h2>Page no found!</h2>
//       </>
//     )
//   }
// }
// export default App;

// But we write the if else condition in short form using ternary operator...

// import React, {useState} from "react";
// function App(){
//   const [data, setData] = useState(false);
//   return(
//     <>
//     {data?<h2>Welcome</h2>:<h2>Data Not Found!</h2>}
//     </>
//   )
// }
// export default App;

//-------------------------------------------------------------------
//use of --- if , else if and else condition .......

// import React,{useState} from "react";
// function App(){
//   const[user,setUser] = useState(2);
//   return(
//     <>
//       {user==1?<h2>It's use for User 1</h2>:user==2?<h2>It's use for User 2</h2>:<h2>It's use for User 3</h2>}
//     </>
//   )
// }
// export default App;
 // Here we see that there are three conditions are used so in this situation to check the condition we use if else if condition
 // if user==1 then output will be--- It's use for User 1
 // if user==2 then output will be--- It's use for User 2
 // if user==3 then output will be--- It's use for User 3

 //------------------------------------------------------------------------
 //useeffect used in react...
 //when we render or  do any operation then in this case the useEffect automatically called..
//  import React,{useState,useEffect} from 'react';
//  function App(){
//   const[data,setData] = useState("Ram");
//   const[count,setCount] = useState(0);
//   useEffect(()=>{
//     console.log("useEffect called");
//   })
//   function changeData(){
//     setCount(count+1);
//   }
//   function changeData1(){
//     setData("Shyam")
//   }
//     return(
//       <>
//       <h2>{count}</h2>
//       <button onClick = {changeData}>Count</button>
//       <button onClick = {changeData1}>ChangeData</button>
//       </>
//     )
//  }
//  export default App;

//---------------------------------------------------------------------------
//stopwatch.

// import React, { useRef, useState,useEffect } from 'react'
// // import '../styles/App.css';
// const App = () => {
//   const startTime = useRef(0);
//   const intervalRef = useRef(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const[running,setRunning] = useState(false);
//   const[lapvisi,setlapvisi] = useState(false);
//   useEffect(() => {
//     let interval;
//     if (running) {
//       interval = setInterval(() => {
//         setCurrentTime((prevTime) => prevTime + .010);
//       },10);
//     } else if(!running){
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [running]);

//   function handleLap(){
//     setLaps([...laps,currentTime])
//     setlapvisi(true)
//   }

//   return (
//     <div id="main">
//       <section>
//         <h1 className='seconds-elapsed'>{currentTime.toFixed(3)}</h1>
//         <section className='buttons'>
//           <button className="start-btn" onClick={()=>{setRunning(true)}}>START</button>
//           <button className="stop-btn" onClick = {()=>{setRunning(false)}}>STOP</button>
//           <button className="lap-btn" onClick = {handleLap}>LAP</button>
//           <button className="reset-btn" onClick = {()=>{setRunning(false)}}>RESET</button>
//         </section>
//       </section>
//      { lapvisi &&<section className='lap-section'>
//         <h2>Laps</h2>
//         <section className='laps'>
//           {laps.map((item)=><p>{item.toFixed(3)}</p>)}
//         </section>
//       </section>}
//     </div>
//   )
// }


// export default App;

//-----------------------------------------------------------------------------------
// List with bootstrap table
// import "./App.css"
// import React from 'react'
// import {Table} from 'react-bootstrap'
// function App(){
//   const users = [
//     {name : 'anil', email : 'anil@test.com', contact : '111'},
//     {name : 'Burce', email : 'burce@test.com', contact : '222'},
//     {name : 'Peter', email : 'peter@test.com', contact : '333'}
//   ]
//   return(
//     <div className = "App">
//       <h1>List with Bootstrap table</h1>
//       <Table>
//         <tr>
//           <td> Name </td>
//           <td> Email </td>
//           <td> Contact</td>
//         </tr>
//         {
//           users.map((item)=>
//            <tr>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.contact}</td>
//            </tr>
//           )
//         }
//       </Table>
//     </div>
//   )
// }
// export default App;

//-------------------------------------------------------------------------
// use of useEffect in recat ---- when we do any action then its work 


// import React from 'react'
// import {useState, useEffect} from 'react'
// function App(){
//   const[count,setCount] = useState(0)
//   const[item,setItem] = useState(10)

//   useEffect(()=>{
//     console.log("useEffect")
//   },[count])  // its mean that its will perform for count
//   return(
//     <>
//     <h1>Set Count : {count} </h1>
//     <h2>Set Item : {item}</h2>
//     <button onClick = {()=>setCount(count+1)}>Count</button>
//     <button onClick = {()=>setItem(item*5)}>Item</button>
//     </>
//   )
// }
// export default App;

//--------------------------------------------------------------------

//useRef used in react

// import React from 'react'
// import {useRef} from 'react'
// function App(){
//   const inputRef = useRef(null)

//   function handleInput(){
//     //inputRef.current.value = "100"
//     inputRef.current.style.backgroundColor = "red"
//   }
//   return(
//     <>
//     <h1>useRef in React</h1>
//     <input type="text" ref = {inputRef}/>
//     <button onClick = {handleInput}>Click Here</button>
//     </>
//   )
// }
// export default App;
//---------------------------------------------------------------------------------------

//Router use in React to access the another webpage link or etc..

// import React from 'react'
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
// function App(){
//   return(
//     <>
//     <Router>
//       <Link to ="/home">Home page</Link><br/>
//       <Link to ="/about">About page</Link>
//       <Route path = "/home"><Home/></Route>
//       <Route path = "/about"><About/></Route>

//     </Router>
//     </>
//   )
// }
// function Home(){
//   return(
//     <>
//     <h2>Home Page</h2>
//     <p>This is Home Page</p>
//     </>
//   )
// }
// function About(){
//   return(
//     <>
//     <h2>About Page</h2>
//     <p>This is About Page</p>
//     </>
//   )
// }
// export default App;

//-------------------------------------------------------------
// Get API in react

// import React from 'react'
// import {useEffect,useState} from 'react'
// function App(){
//   const[data,setData] = useState([])
//   useEffect(()=>{
//   fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then((result)=>{
//     result.json().then((resp)=>{
//        setData(resp)
//     })
//   },[])
// })
//   return(
//     <>
//     <h1>Get API Data</h1>
//     <table border = "1">
//       <tr>
//         <td>Name</td>
//         <td>City</td>
//       </tr>
//       {
//         data.map((item)=>
//         <tr>
//           <td>{item.name}</td>
//           <td>{item.city}</td>
//         </tr>
//         )
//       }
//     </table>
//     </>
//   )
// }
// export default App;
//---------------------------------------------------------------------------------
//POST method in Rest API
// import React, {useState} from 'react'
// function App(){
//   const[name, setName] = useState("")
//   const[city, setCity] = useState("")
//   function saveUser(){
//     console.log({name,city})
//     let data = {name,city}
    
//     fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",{
//       method : 'POST',
//       header : {
//         'Accept' : 'application/json',
//         'content-Type' : 'application/json'
//       },
//       body : JSON.stringify(data)
//     }).then((result)=>{
//       result.json().then((resp)=>{
//         console.log("resp",resp)
//       })
//     })
//   }

//   return(
//     <>
//     <h1>POST API Call</h1>
//     <input type="test" value={name} onChange ={(e)=>{setName(e.target.value)}} name="name" /><br/> <br/>
//     <input type='text' value={city} onChange ={(e)=>{setCity(e.target.value)}} name = "city"/><br/><br/>
//     <button type="button" onClick = {saveUser}>Click Here</button>
//     </>
//   )
// }
// export default App;

//--------------------------------------------------------------------
//DELETE method API in react
import React from 'react'
import {useState,useEffect} from 'react'

function App(){
  const[data,setData] = useState([])
  useEffect(()=>{
    getList()
  },[])
  function getList(){
    fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        setData(resp)
      })
    })
  }
  function deleteUser(id){
    fetch(`https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8 ${id}`, {
      method : 'DELETE',
      headers : {
      'Active':'application/json',
      'content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log("Respose",resp)
        getList()
      })
    })
  }
  return(
    <>
    <h1>Delete API called in React</h1>
    <table border="1">
      <tbody>
        <tr>
          <td>Name</td>
          <td>City</td>
          <td>Operation</td>
        </tr>
        {
          data.map((item,i)=>
           <tr key={i}>
            <td>{item.name}</td>
            <td>{item.city}</td>
           <td><button onClick = {()=>deleteUser(item.id)}>DELETE</button></td> 
           </tr>
          )
        }
      </tbody>
    </table>
    </>
  )
} 
export default App;

//------------------------------------------------------------------
// import React from 'react'
// import User from './component/User'
// function App(){
//   return(
//     <>
//     <h6>App Components</h6>
//     <User name = {'sidhu'} city = {'varanasi'}/>
//     </>
//   )
// }
// export default App;