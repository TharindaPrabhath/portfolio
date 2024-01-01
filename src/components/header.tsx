import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="container flex flex-row items-center justify-between py-4 md:py-8">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={150} height={80} />
      </Link>

      <nav className="hidden flex-row items-center gap-12 md:flex">
        {Tabs.map((tab) => (
          <Link key={tab.name} href={tab.href}>
            <p>{tab.name}</p>
          </Link>
        ))}
      </nav>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="w-8 h-8" />
      </Button>
    </header>
  );
}

export default Header;

const Tabs = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Education",
    href: "/education",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
