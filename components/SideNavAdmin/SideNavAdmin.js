import React from "react";

const SideNavAdmin = ({ onTabSelect, tab }) => {
  const handleTabClick = (index) => {
    onTabSelect(index);
  };

  return (
    <ul className="sidebar-admin flex justify-between px-10 h-10 items-center">
      <li
        onClick={() => handleTabClick(0)}
        className={`${tab === 0 && "underline"} cursor-pointer hover:underline`}
      >
        Listas
      </li>
      <li
        onClick={() => handleTabClick(1)}
        className={`${tab === 1 && "underline"} cursor-pointer hover:underline`}
      >
        Cargar Album
      </li>
      <li
        onClick={() => handleTabClick(2)}
        className={`${tab === 2 && "underline"} cursor-pointer hover:underline`}
      >
        Cargar canción
      </li>
    </ul>
  );
};

export default SideNavAdmin;
