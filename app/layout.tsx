import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Athena Labs — Physical AI',
  description:
    'Affordable robotics and rugged edge AI computers for schools, labs and industry. Designed, built and serviced in Almaty.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}
