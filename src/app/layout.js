import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { SubscribeProvider } from "@/app/context/SubscribeContext";
import { Poppins } from "next/font/google";
import { ShareProvider } from "./context/ShareContext";

const poppins = Poppins({
  weight: ['100', '200', '300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SubscribeProvider>
        <ShareProvider>
          <header>
            <Navigation />
          </header>
          {children}
          <Footer />
          </ShareProvider>
        </SubscribeProvider>
      </body>
    </html>
  );
}