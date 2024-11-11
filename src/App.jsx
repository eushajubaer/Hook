
import { useRef, useState } from 'react'
import './App.css'
import Container from './Components/Container';
import Button from './Button';

function App() {
 
 let [count, setCount] = useState(0);

 let countRef = useRef(0)

 let handleClick=()=>{
   count++
   setCount(count)
 }
// =========
let handleClick2=()=>{
  console.log(countRef .current++);
}

  return (
    <>
    <Container>
    <h1>UseState</h1>
     <h2>{count}</h2>
     <button onClick={handleClick}>Click</button>

     {/* ============= */}
     <h1>UseState</h1>
     <h2>{countRef .current++}</h2>
     <button onClick={handleClick2}>Click</button>
    </Container>
    
    </>
  )
}

export default App

