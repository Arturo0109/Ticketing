import React from "react";
import Link from "next/link";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
    return (
        <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <a className="text-xl font-bold">Ticketing App</a>
            </Link>
            <nav className="space-x-4">
              <Link href="/events"><a>Eventos</a></Link>
              <Link href="/admin"><a>Admin</a></Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-white border-t py-4 text-center">
          © {new Date().getFullYear()} Ticketing App
        </footer>
      </div>
    );
}
