// app/register/page/

"use client"
import React, { useState, useEffect } from 'react'

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setError("Password do not match!");
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError("Please complete all inputs.");
      return;
    }

    // const resCheckUser = await fetch("http://localhost:3000/api/usercheck", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email })
    // })

    // const { user } = await resCheckUser.json();

    // if (user) { 
    //     setError("User already exists.");
    //     return;
    // }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      })

      const data = await res.json();

      if (res.ok) {
        // const form = e.target;
        setName("");
        setError("");
        setSuccess("User registration successfully!");
        // form.reset();
      } else {
        setError(data.message || "User registration failed.");
        console.log("User registration failed.")
      }

    } catch (error) {
      setError("Error during registration: " + error.message);
      console.log("Error during registration: ", error)
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
            {error}
          </div>
        )}

        {success && (
          <div className='bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
            {success}
          </div>
        )}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text" onChange={(e) => setEmail(e.target.value)}
          className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2'
          placeholder='Enter your email' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your password' />
        <input 
          type="password" 
          onChange={(e) => setConfirmPassword(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Confirm your password' />


        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}
