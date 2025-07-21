import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Container({ children }: ChildrenProps) {
  return (
    <div className="flex min-h-screen items-center justify-between flex-col max-w-5xl border-x mx-auto">
      <header className="w-full sticky top-0 z-50 bg-background border-b">
        <Navbar />
      </header>
      <main className="flex-1 w-full flex items-start justify-center mt-4">
        {children}
      </main>
      <footer className="w-full border-t">
        <Footer />
      </footer>
    </div>
  );
}
