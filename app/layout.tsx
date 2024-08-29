import type { Metadata } from "next";
import Header from './components/ui/Header'
import "./globals.css";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">    
      <body>
        <Header/>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}