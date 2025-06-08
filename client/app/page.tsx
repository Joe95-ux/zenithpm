"use client"

import { useUser } from "@auth0/nextjs-auth0"

export default function Home() {
  const { user, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (!user) return <div>
   <p>Not authenticated!</p> 
   <a href="/auth/login?screen_hint=signup">Sign up</a>
   <a href="/auth/login">Log in</a> 

  </div>

  return (
    <main>
      <h1>Profile</h1>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </main>
  )
}