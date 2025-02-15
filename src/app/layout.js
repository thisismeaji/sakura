import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { SubscribeProvider } from "@/app/context/SubscribeContext";
import { Poppins } from "next/font/google";
import { ShareProvider } from "./context/ShareContext";
import Head from "next/head";

const poppins = Poppins({
  weight: ['100', '200', '300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Sakura (さくら) - VTuber and Singer" />
        <meta property="og:description" content="As a vtuber and singer, Sakura radiates the elegance of a blooming cherry blossom. Her melodious voice and captivating stage presence evoke joy and warmth, making every performance an unforgettable experience." />
        <meta property="og:image" content="https://sakura-vtuber-bio.vercel.app/assets/images/share-img.png" />
        <meta property="og:url" content="https://sakura-vtuber-bio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sakura (さくら) - VTuber and Singer" />
        <meta name="twitter:description" content="As a vtuber and singer, Sakura radiates the elegance of a blooming cherry blossom. Her melodious voice and captivating stage presence evoke joy and warmth, making every performance an unforgettable experience." />
        <meta name="twitter:image" content="https://sakura-vtuber-bio.vercel.app/assets/images/share-img.png" />
      </Head>
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