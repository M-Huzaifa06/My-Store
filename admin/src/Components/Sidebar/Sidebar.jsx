import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai";

const Sidebar = () => {
  const menu = [
    { name: "Add Product", to: "/addproduct", icon: AiOutlinePlus },
    { name: "Product List", to: "/listproduct", icon: AiOutlineUnorderedList },
  ];

  return (
    <aside className="w-64 h-full bg-slate-900 text-slate-200 shadow-xl border-r border-slate-800 flex flex-col">
      
      {/* Logo / Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-lg font-semibold tracking-wide text-white">
          Admin Panel
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                 ${
                   isActive
                     ? "bg-slate-800 text-white shadow-md"
                     : "text-slate-400 hover:bg-slate-800 hover:text-white"
                 }`
              }
            >
              <Icon className="text-lg" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
};

export default Sidebar;