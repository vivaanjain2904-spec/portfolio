import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vivaan — Finance Portfolio',
  description: 'Sophomore at Arizona State University studying Economics, with hands-on experience in finance, paper trading, and market analysis. Founder of Scholars of Business & Economics at ASU.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
