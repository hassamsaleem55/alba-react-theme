import { Outlet } from "react-router-dom";
import Header from "./app-layouts/Header";
import Footer from "./app-layouts/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full bg-linear-to-b from-gray-50 to-white">
      <Header />
      <main className="pt-16 sm:pt-18 md:pt-20 flex-1 relative">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
