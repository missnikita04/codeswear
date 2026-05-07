import './globals.css'
import Navbar from './components/navbar/page' 
import Footer from './components/footer/page'
import {CartProvider} from '../app/context/cartContext/page'
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Toaster position="top-right" />
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
        </body>
    </html>
  )
}