import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [users, setUsers] = useState({})
  useEffect(()=>{
    fetch("/api").then((response)=> response.json()).then((data)=>{
      console.log(data)
      setUsers(data)
    });
  },[])
  return (
    <div className="App">
      {typeof users.users !== "undefined" ? users.users.map((user,index)=>{
        return <p key={index}>{user}</p>
      }) : <p>Loading</p>}
    </div>
  );
}

export default App;
