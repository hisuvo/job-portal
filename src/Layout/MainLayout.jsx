import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <header className="flex-shrink-0">
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
