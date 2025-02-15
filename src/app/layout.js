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

export const metadata = {
  title: "Sakura (さくら) - VTuber and Singer",
  description:
    "As a vtuber and singer, Sakura radiates the elegance of a blooming cherry blossom. Her melodious voice and captivating stage presence evoke joy and warmth, making every performance an unforgettable experience.",
  url: "https://sakura-vtuber-bio.vercel.app/",
  image: "https://sakura-vtuber-bio.vercel.app/assets/images/share-img.png",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
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