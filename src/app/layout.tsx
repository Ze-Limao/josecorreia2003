import type React from "react"
import { rubik, rubikMono, rubikScribble } from "./fonts"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubikMono.variable} ${rubikScribble.variable}`}>
      <body>{children}</body>
    </html>
  )
}