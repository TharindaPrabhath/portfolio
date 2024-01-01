import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="container flex flex-row items-center justify-between py-4">
      <Link href="/">
        <Image src={"/logo.svg"} alt="Logo" width={150} height={80} />
      </Link>
      <Button variant="ghost" size="icon">
        <Menu className="w-8 h-8" />
      </Button>
    </header>
  );
}

export default Header;
