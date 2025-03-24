import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import Layout from "@/components/Layout";


export const fetchCache = 'default-cache';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Coin Society",
  description: "Blockchain technology research labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <App>{children}</App>
      </body>
    </html>
  );
}


function App({ children }: { children: React.ReactNode }) {
  return <>
    <ColorSchemeScript defaultColorScheme="auto" />
    <MantineProvider defaultColorScheme="auto">
      <Layout>{children}</Layout>
    </MantineProvider>
  </>
}
