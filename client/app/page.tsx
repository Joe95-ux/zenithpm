import Image from "next/image";
import {useUser} from "@auth0/nextjs-auth0/client";
import {Link} from "next/link"

export default function Home() {
  const {user, error, isLoading} = useUser();
  return (
    <>
     {user ? <p>User logged in</p>: <Link href="/api/auth/login">Login</Link>}
    </>

   
  );
}
