import type { Metadata } from "next";
import './layout.scss';
import Image from 'next/image';
import { TabsMenu } from "@/components/tabs_menu/tabs_menu";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "CapibaribeTI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="main-layout">
          <div className="header">
            <Image src="/logo_landscape.png" width={200} height={50} alt="Logo" />
            <TabsMenu />
          </div>
          <div className="main-content">
            {children}
          </div>
          <div className="footer-wrapper">
            <Footer/>
          </div>
          </div>
      </body>
    </html>
  );
}
