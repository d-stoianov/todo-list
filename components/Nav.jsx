"use client"

import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
    const { data: session } = useSession()
    
    const [providers, setProviders] = useState(null)

    useEffect(() => {
        (async () => {
          const res = await getProviders()
          setProviders(res)
        })()
      }, [])

    return (
        <div className="w-full flex justify-end text-white px-10">
           { session?.user ? 
            <>
                <button 
                    type="button" 
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
            </>
            :
            <>
                { providers &&
                Object.values(providers).map((provider) => (
                    <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                    >
                        Sign in
                    </button>
                ))}
            </> }
        </div>
    )
}

export default Nav