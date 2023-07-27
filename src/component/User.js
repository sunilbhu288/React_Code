import React from 'react'
function User(props){
  return(
    <>
    <h6>User Components</h6>
    <h5> Name : {props.name}</h5>
    <h5>City : {props.city}</h5>
    </>
  )
}
export default User;