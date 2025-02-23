import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8">
          {/* <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design.jpg-vSVR5IySRXNFYp4hEFjXnsXzqGHfDM.jpeg"
//               alt="Logo"
//               width={32}
//               height={32}
//               className="rounded"
//             /> */}
        </div>
        <span className="text-xl font-semibold">Celusio</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm font-medium hover:text-primary">
          About Us
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary">
          Features
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary">
          Contact Us
        </a>
      </nav>
      <Button size="sm" className="bg-primary hover:bg-primary/90">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
