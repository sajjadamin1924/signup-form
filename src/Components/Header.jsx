import React from "react";

const Header = () => {
  return (
    <div className="px-4">
      <header className="flex">
        <img src="dashboard.jpg" alt="logo" />
        <h1 className="text-4xl font-extrabold relative">Dexta</h1>
        <p className="absolute top-7 left-20">data-led-hiring</p>
      </header>
    </div>
  );
};

export default Header;
