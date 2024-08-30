import { redirect } from "next/navigation"

export default function Home() {
  redirect('/dashboard/counter')
  return (
    <>
      <h1>Hallo Welt</h1>
    </>
    
)}
