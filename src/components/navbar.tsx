import React from "react";
import { Button } from "@/components/ui/button";
import { IoTimer } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <IoTimer className="text-xl" />
        <h1>Time</h1>
      </div>

      <Button>Login</Button>
    </nav>
  );
};

export default Navbar;
