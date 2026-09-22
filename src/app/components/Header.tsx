import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-[90px] bg-[#fff6f4] w-full flex px-4 items-center">
      <Image src="/homelogo.svg" width="300" height="200" alt="logo" />
    </div>
  );
};

export default Header;
