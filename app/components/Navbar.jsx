import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='bg-pink-700 text-pink-100 p-5'>

            <div className="mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/">NextAuth</Link>
                </div>
                <ul className="flex items-center">
                    <li className="mx-3">
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="mx-3">
                        <Link href="/register">Register</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar