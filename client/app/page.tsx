import {useUser} from "@auth0/nextjs-auth0/";
import Link from "next/link"

export default function Home() {
  const {user, error, isLoading} = useUser();

  if(isLoading) return <div>Loading...</div>
  if(error) return <div><p>Error finding user...</p></div>

  if(!error && user) return (
    <div>{user.name}</div>
  )
  return <Link href="/auth/login">Login</Link>
}
