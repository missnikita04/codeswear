import './globals.css'
import Navbar from './components/navbar/page' 
import Footer from './components/footer/page'
import {CartProvider} from '../app/context/cartContext/page'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
        <Navbar/>
        {children}
        <Footer/>
         </CartProvider>
        </body>
    </html>
  )
}