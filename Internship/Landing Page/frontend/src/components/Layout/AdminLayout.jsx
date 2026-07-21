import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  LogOut,
} from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">

        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">

            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/admin/users"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
              >
                <Users size={20} />
                Users
              </Link>
            </li>

            <li>
              <Link
                to="/admin/products"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
              >
                <Package size={20} />
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/admin/settings"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
              >
                <Settings size={20} />
                Settings
              </Link>
            </li>

          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition">
            <LogOut size={20} />
            Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-slate-800">
            Admin Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />

            <span className="font-medium">Admin</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;