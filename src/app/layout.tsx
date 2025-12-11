'use client'

import './layout.scss';
import Image from 'next/image';
import { TabsMenu } from "@/components/tabs_menu/tabs_menu";
import { Footer } from "@/components/footer/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = 'dark';
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <video className={theme} src="/background/background_light.mp4" autoPlay={true} loop={true} muted playsInline={true} />
        <div className="main-layout">
          <div className="header">
            <a href='/'>
              <Image src="/logo/dark/logo.png" width={70.77} height={56} alt="Logo" />
            </a>
            <TabsMenu />
          </div>
          <div className="main-content">
            {children}
            <div id="cta" className="">
              <h1>Potencialize conosco o crescimento do seu negócio.</h1>
              <a className="saiba-mais">Fale conosco</a>
            </div>
            <div className="footer-wrapper">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
