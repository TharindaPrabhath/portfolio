"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

function Header() {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  });

  return (
    <div
      className={`container flex flex-row items-center justify-between py-4 md:py-8 ${
        sticky &&
        "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
      }`}
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={150}
          height={80}
          className="w-24"
        />
      </Link>

      <nav className="hidden flex-row items-center gap-12 md:flex">
        {Tabs.map((tab) => (
          <Link key={tab.name} href={tab.href}>
            <p>{tab.name}</p>
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-8 h-8" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-neutral-50 flex items-center justify-center">
          <nav className="flex flex-col gap-8 w-full">
            {Tabs.map((tab) => (
              <Link key={tab.name} href={tab.href} className="py-4">
                <p className="text-4xl font-semibold text-center text-stone-600 hover:text-stone-700">
                  {tab.name}
                </p>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;

const Tabs = [
  {
    name: "About",
    href: "/under-construction",
  },
  {
    name: "Projects",
    href: "/under-construction",
  },
  {
    name: "Work",
    href: "/under-construction",
  },
  {
    name: "Education",
    href: "/under-construction",
  },
  {
    name: "Contact",
    href: "/under-construction",
  },
];
