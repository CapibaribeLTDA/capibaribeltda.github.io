import type { Metadata } from "next";
import './layout.scss';
import Image from 'next/image';
import { TabsMenu } from "@/components/tabs_menu";

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
        <div className="header">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
          <span id="company-name">CAPIBARIBETI</span>
          <TabsMenu/>
        </div>
        <div className="main-content">
          {children}
        </div>
        <div className="footer"><span>Footer info</span></div>
      </body>
    </html>
  );
}
