import '@/styles/globals.css'

export const metadata = {
    title: 'Todo-list',
    description: 'Get your day planned with ease !',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}