import '@/styles/globals.css'
import Nav from "@/components/Nav"
import Provider from "@/components/Provider"

export const metadata = {
    title: 'Todo-list',
    description: 'Get your day planned with ease !',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className='gradient'>
                <Provider >
                    <main className="mt-7">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout