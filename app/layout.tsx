
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Mainstore from "./store/MainStore";
import { ToastContainer } from './nextToast';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>E-Commerce Store</title>
        <body className="max-w-screen-2xl mx-auto ">
        <Mainstore>
          <Navbar/>
          {children}
          <Footer />
        </Mainstore>
       <ToastContainer/>
        </body>
    </html>
  );
}
