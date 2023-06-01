import React from "react";

import { TopHeader } from "./TopHeader";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <div className="w-full flex-col">
      <TopHeader />
      <Navigation />
    </div>
  );
};

export default Header;
