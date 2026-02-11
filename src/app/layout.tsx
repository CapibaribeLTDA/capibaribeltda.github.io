'use client'

import './layout.scss';
import Image from 'next/image';
import Link from 'next/link';
import { TabsMenu } from "@/components/tabs_menu/tabs_menu";
import { Footer } from "@/components/footer/footer";
import ThemeSwitch from '@/components/theme_switch/theme_switch';
import { useState } from 'react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
    localStorage.setItem('user-theme', newTheme);
  }

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <video className={theme} src="/background/background_light.mp4" autoPlay={true} loop={true} muted playsInline={true} />
        <div className="main-layout">
          <div className="header">
            <Link href='/'>
              <Image src={`/logo/${theme}/logo.png`} height={70} width={70} alt="Logo" fill={false}/>
            </Link>
            <TabsMenu />
            <ThemeSwitch
              onChange={handleToggleTheme}
              theme={theme}
            />
          </div>
          <div className="main-content">
            {children}
            <div id="cta" className="">
              <h1>Potencialize conosco o crescimento do seu negócio.</h1>
              <a className="saiba-mais" href='/contact'>Fale conosco</a>
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
