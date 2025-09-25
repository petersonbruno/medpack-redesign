// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'MEDPACK - Revolutionizing Healthcare Delivery',
  description: "Get your medication hassle-free with Medpack's innovative solutions for health facilities.",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#CFD2D4] font-poppins">
        {children}
      </body>
    </html>
  )
}
