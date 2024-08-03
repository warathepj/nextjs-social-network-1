"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

function LoginPage() {
  return (
    <div>
      <Navbar />
      Login Page
      <div className='container mx-auto mt-4'>
        <form action="/api/register" method="post">
          <input className="block bg-gray-300 p-2 my-2 rounded-md" type="email" name="email" placeholder="email" />
          <input className="block bg-gray-300 p-2 my-2 rounded-md" type="password" name="password" placeholder="password" />
          <button type="submit" className='bg-gray-300 p-2 my-2 rounded-md'>Login</button>
        </form>
        <p className="a">
            go to <Link href="/register" className="text-blue-500 hover:underline">Register</Link></p>
      </div>  
    </div>
  )
}

export default LoginPage