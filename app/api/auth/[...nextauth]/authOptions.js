import GoogleProvider from "next-auth/providers/google"

import User from "@/models/user"
import connectToDb from "@/utils/database"

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()

            return session
        },
        async signIn({ profile }) {
            try {
                
                await connectToDb()
                const userExists = await User.findOne({
                    email: profile.email
                })

                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        image: profile.picture
                    })
                }

                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
}

export default authOptions