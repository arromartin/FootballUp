import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="max-w-6xl mx-auto p-6">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">⚽ Lineup Manager</h1>
            <nav className="flex gap-3">
              <a className="underline" href="/">Inicio</a>
              <a className="underline" href="/squad">Plantilla</a>
              <a className="underline" href="/lineup">Editor</a>
              <a className="underline" href="/matches">Partidos</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
