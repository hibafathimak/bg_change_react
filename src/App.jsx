import { useState } from 'react'

import './App.css'

function App() {
   const [color,setColor]=useState("white")
  return (
    <>
      <div className='w-100 p-5 d-flex justify-content-center align-items-center' id='bg' style={{backgroundColor:color,height:'100vh'}}>
        <div>
              <button onClick={()=>setColor("black")} className='btn btn-dark rounded-5 m-3'>Black</button>
              <button onClick={()=>setColor("grey")} className='btn btn-secondary rounded-5 m-3'>Grey</button>
              <button onClick={()=>setColor("Dodgerblue")} className='btn btn-info rounded-5 m-3'>Light-Blue</button>
              <button onClick={()=>setColor("blue")} className='btn btn-primary rounded-5 m-3'>Dark-Blue</button>
              <button onClick={()=>setColor("green")} className='btn btn-success rounded-5 m-3'>Green</button>
              <button onClick={()=>setColor("yellow")} className='btn btn-warning rounded-5 m-3'>Yellow</button>
              <button onClick={()=>setColor("red")} className='btn btn-danger rounded-5 m-3'>Red</button>
              <button onClick={()=>setColor("white")} className='btn btn-light rounded-5 m-3'>White</button>
        </div>
      </div>
    </>
  )
}

export default App
