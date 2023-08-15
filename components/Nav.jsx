"use client"

import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
    const { data: session, status } = useSession()
    
    const [providers, setProviders] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        (async () => {
          const res = await getProviders()
          setProviders(res)
        })()
      }, [])

    return (
        <div className="w-full flex justify-end h-[100px] text-white">
            <div className="w-[100px] h-full flex flex-col items-center gap-1 mt-4 md:mx-8">
                {
                    status === "authenticated" ? (
                        <>
                            <img
                                referrerPolicy="no-referrer"
                                width={50}
                                height={50}
                                src={session?.user.image}
                                onClick={() => setToggle(!toggle)}
                                className="cursor-pointer rounded-[100px]"
                            />
                            {toggle && (
                                <div className="text-center">
                                    <button 
                                        type="button" 
                                        onClick={() => signOut()}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="mt-2"
                                >
                                    Sign in
                                </button>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Nav