import { Montserrat } from "next/font/google";
import "./globals.css";
import CommonHeader from "@components/CommonHeader";
import CommonFooter from "@components/CommonFooter";
import GoogleTagManager from "@components/GoogleTagManager";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body className={montserrat.className}>
        <CommonHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
