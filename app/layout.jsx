import '@/styles/globals.css'

export const metadata = {
    title: 'Todo-list',
    description: 'Get your day planned with ease !',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className='gradient'>
                {children}
            </body>
        </html>
    )
}

export default RootLayout