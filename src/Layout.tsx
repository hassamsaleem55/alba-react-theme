import { Outlet } from "react-router-dom";
import Header from "./app-layouts/Header";
import Footer from "./app-layouts/Footer";

export default function Layout() {
  return (
    <div className="bg-gray-100 md:h-screen overflow-x-hidden max-w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
