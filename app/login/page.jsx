"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginPage() {
  const {data:session} = useSession()
  return (
    <div>
      {session?(<>
      <h3>Welcome Back</h3>
      <p>
        {JSON.stringify(session)}
      </p>
      <button onClick={()=>{signOut()}}>Sign out</button>
      </>):(
        <>
        <button onClick={()=>{signIn('github')}}>Login with Github</button>
        </>
      )}
    </div>
  )
}
