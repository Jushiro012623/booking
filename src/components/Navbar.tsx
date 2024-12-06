import React from "react";
import Typography from "./ui/Typography";
export default function Navbar() {
  return (
    <nav className="z-10 fixed top-0 left-0 w-full flex h-20 items-center px-16 justify-between bg-white border-b">
        <Typography variant="h3">LOGO</Typography>
    </nav>
  );
}
