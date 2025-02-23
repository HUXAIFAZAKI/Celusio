"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const debouncedScroll = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearTimeout(debouncedScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0 shadow-sm" : "-translate-y-full"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-bold text-primary">C</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Celusio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Get Started Button (Desktop) */}
        <Button
          size="sm"
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white"
          asChild
        >
          <Link href="#get-started">Get Started</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t"
          >
            <nav className="container flex flex-col gap-4 py-4">
              <Link
                href="#about"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Features
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="#get-started" onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
