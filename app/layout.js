import { Montserrat } from "next/font/google";
import "./globals.css";
import CommonHeader from "@components/CommonHeader";
import CommonFooter from "@components/CommonFooter";
import { GoogleTagManager } from '@next/third-parties/google'


const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <GoogleTagManager gtmId="GTM-PGC67T7" />
      <body className={montserrat.className}>
        <CommonHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
