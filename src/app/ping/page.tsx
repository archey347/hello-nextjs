'use client'

import { useState, useEffect } from 'react'

export default function Home() {

  const [message, setMessage] = useState('')

  let btnClick = () => {
    if (message == "Ping") {
      setMessage("Pong")
    } else {
      setMessage("Ping")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold text-center p-2">{ message }</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={btnClick}>Ping</button>

    </main>
  )
}
