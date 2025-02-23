import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8">
              {/* <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design.jpg-vSVR5IySRXNFYp4hEFjXnsXzqGHfDM.jpeg"
//                   alt="Logo"
//                   width={32}
//                   height={32}
//                   className="rounded"
//                 /> */}
            </div>
            <span className="text-xl font-semibold">Celusio</span>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
