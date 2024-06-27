import React from "react";


const NavBar = () => {
  return (
    <nav className="bg-yellow-400 flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <div className="text-white font-bold text-lg mr-4">Ecommerce</div>
        <div className="bg-white rounded-md flex items-center px-2">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="outline-none py-1 px-2 w-48"
          />
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
            Pesquisar
          </button>
        </div>
      </div>
      <div className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;

