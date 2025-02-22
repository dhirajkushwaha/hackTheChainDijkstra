import type { Metadata } from "next"; 
import "./globals.css";
import './font.css'
import { AuthProvider } from '@/context/AuthContext';

import Header from "@/components/ui/custom/Header";
import Footer from "@/components/ui/custom/footer";

import ChatlingWidget from "@/components/ui/custom/chatlingWidget"
import Cursor from "@/components/ui/custom/Cursor"


import Script from "next/script";

 
export const metadata: Metadata = {
  title: "Maitri App",
  description: "Developed by Dijkstra Team IIITK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className="mt-[120px]" 
      >
        
        <Script id="chatling-config">
          {`
            window.chtlConfig = { chatbotId: "9197784116" };
          `}
        </Script>
        <Script
          id="chatling-embed-script"
          strategy="afterInteractive"
          src="https://chatling.ai/js/embed.js"
          data-id="9197784116"
        />
        <AuthProvider>
          <Header></Header>
          <Cursor />
          {children}

        </AuthProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
