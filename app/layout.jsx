import { Inter, Bebas_Neue } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata = {
  title: "Portfolio",
  description: "Portfolio with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${inter.variable} ${bebas.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
