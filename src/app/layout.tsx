import './globals.css'
import Header from './components/header'



export const metadata = {
  title: 'SystemOS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <html lang="en">
      <body>
        {children}
        <Header/>
      </body>
    </html>
  )
}
