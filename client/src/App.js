import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [users, setUsers] = useState()
  useEffect(()=>{
    fetch("localhost:5000/api").then((data)=>{
       console.log(data)
    });
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
