'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ShortParrot() {

  const router = useRouter()

  const [message, setMessage] = useState('')
  const [odMessage, setODMessage] = useState('')
  

  return (
    <main className="flex min-h-screen flex-col p-24">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="message" 
            type="text" 
            placeholder="Message" 
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <p>
            <strong>Quick Parrot</strong>
            <span>{message}</span>
          </p>
          <p>
            <strong>OD Parrot</strong>
            <span>{odMessage}</span>
            <button className="btn btn-blue" onClick={(e) => setODMessage(message)}>Go</button>
          </p>
        </div>
    </main>
  )
}