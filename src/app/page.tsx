import Image from "next/image";
'use client'
import {useState} from "react"
export default function Home() {
  const [counter, setCounter]=useState(0)
  // let counter = 5
  const handleIncrement =()=>{
    setCounter(counter + 1)
    console.log('Added value==>')

  }
  // counter = counter - 1
  const handleDecrement =()=>{
    setCounter(counter - 1)
    console.log('Added value==>')
  }
  // counter = counter + 1
  return (
    <div className="flex flex-col justify-center space-y-4 bg-gray-400 items-center h-screen">
      <h1>useState</h1>
      <p>counter</p>
     <button onClick={handleIncrement}className="bg-green-400 border border-pink-400 p-4">
      Increment:{counter} 
     </button>
     <button onClick={handleDecrement} className="bg-yellow-400 border border-black-400 p-4">
      Decrement:{counter}
     </button>

    </div>
  );
}
