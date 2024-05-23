import { Montserrat } from "next/font/google";
import "./globals.css";
import CommonHeader from "@components/CommonHeader";
import CommonFooter from "@components/CommonFooter";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CommonHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
