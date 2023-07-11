import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>E-Commerce Store</title>
      <body className='max-w-screen-2xl mx-auto '>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
