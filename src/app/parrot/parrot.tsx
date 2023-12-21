'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Parrot() {

  const router = useRouter()

  const [message, setMessage] = useState('')

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
        <button className="btn btn-blue" onClick={() => router.push('/parrot/' + message)}>Go</button>
    </main>
  )
}