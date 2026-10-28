import React, { useEffect, useState } from "react";
 
import GithubUser from "./componenet/GithubUser.jsx";
 
 
function App() {
const[data,setdata]=useState([])
useEffect(() => {
  async function getData( ) {
  const response=await fetch("https://api.github.com/users?per_page=30")
  const result=await response.json()
  setdata(result)
    
  }getData()
 },[])
  return (
    <div className="parent">
  {data.map((info)=>{
    return <GithubUser key={info.id} user={info}/>
  })}
    </div>
  );
}

export default App;
