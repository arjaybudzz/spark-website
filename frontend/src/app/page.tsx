import Link from "next/link"

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <Link href="/login">Go to login</Link>
      <Link href="/register">Go to register</Link>
    </main>
  )
}
