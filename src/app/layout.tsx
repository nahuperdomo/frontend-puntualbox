//app/layout.tsx

import { ReactNode } from "react";
import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";
import './globals.css'
import Head from "next/head";

export const metadata = {
  title: 'ExactDrop',
  description: 'Solución revolucionaria para entregas precisas y programadas.',
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
          precedence="default"
        />
      </Head>
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>

    </>
  )
}