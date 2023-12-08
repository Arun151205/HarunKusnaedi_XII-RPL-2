import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaBook, FaStar, FaChartBar, FaInfoCircle } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Siswa", icon: <FaUser />, path: "/siswa" },
    { label: "Mata Pelajaran", icon: <FaBook />, path: "/mapel" },
    { label: "Nilai", icon: <FaStar />, path: "/nilai" },
    { label: "Grafik", icon: <FaChartBar />, path: "/grafik" },
    { label: "About", icon: <FaInfoCircle />, path: "/about" },
  ];

  return (
    <div className="bg-indigo-700 text-white h-screen fixed w-60 p-5">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold">Aplikasi Data Nilai Siswa</h1>
        <p className="text-gray-300">Manage your data effectively</p>
      </div>
      <div className="flex flex-col items-center pt-2 gap-3">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center w-full relative text-white font-bold py-2 px-4 rounded hover:bg-blue-gray-300 transition duration-100 ease-in-out"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </button>
        ))}
      </div>
      <div>
        <hr className="w-52 border-white my-6" />
      </div>
    </div>
  );
};

export default Sidebar;
