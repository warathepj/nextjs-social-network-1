import Link from 'next/link';
import LoginForm from "./components/LoginForm";


export default function Home() {
  return (
    <>
    <Link href="/users">Users</Link>
    <Link href="/register">register</Link>
    <h1>Welcome to our app</h1>
      <LoginForm />
    </>
  )
}

