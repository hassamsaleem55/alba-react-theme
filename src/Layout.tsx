import { Outlet } from "react-router-dom";
import Header from "./app-layouts/Header";
import Footer from "./app-layouts/Footer";

export default function Layout() {
  return (
    <div className="bg-gray-50 md:h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
