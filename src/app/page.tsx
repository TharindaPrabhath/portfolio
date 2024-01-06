import Image from "next/image";
import Link from "next/link";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Circle, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="container min-h-full flex flex-col justify-evenly">
      <div>
        <div>
          <h1 className="text-5xl font-black leading-tight mt-12">
            hi i&apos;m Tharinda Anurajeewa 👋
          </h1>
          <p className="text-lg mt-2">
            Full stack developer | Entrepreneur | Freelancer
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-2 text-lg text-stone-600 mt-8">
          <p>i&apos;m using</p>
          <Badge variant="outline">
            <Image
              src="/nextjs-logo.png"
              alt="NextJs Logo"
              width={16}
              height={16}
              className="mr-1"
            />
            NextJs
          </Badge>
          <Badge variant="outline">
            <Image
              src="/react-logo.png"
              alt="React Logo"
              width={16}
              height={16}
              className="mr-1"
            />
            React
          </Badge>
          <p>and</p>
          <Badge variant="outline">
            <Image
              src="/tailwindcss-logo.png"
              alt="Tailwind Css Logo"
              width={16}
              height={16}
              className="mr-1"
            />
            Tailwind CSS
          </Badge>
          <p>for frontend, while powering the backend with</p>
          <Badge variant="outline">
            <Image
              src="/nestjs-logo.png"
              alt="NestJs Logo"
              width={16}
              height={16}
              className="mr-1"
            />
            Nest Js
          </Badge>
          <p>.</p>
          <Badge variant="outline">
            <Image
              src="/typescript-logo.png"
              alt="Typescript Logo"
              width={16}
              height={16}
              className="mr-1"
            />
            Typescript
          </Badge>
          <p>is the language of choice.</p>

          <p className="mt-4">
            Let&apos;s code a dynamic web experience together!
          </p>
        </div>

        <Link
          href="https://www.linkedin.com/in/tharinda-anurajeewa/"
          target="_blank"
        >
          <Button
            variant="outline"
            className="bg-transparent rounded-full font-semibold text-lg mt-8 px-8 py-6 w-full md:w-fit"
          >
            let&apos;s connect
          </Button>
        </Link>

        <div className="flex flex-row items-center justify-evenly mt-12 md:items-start md:w-fit md:gap-8 md:mt-8">
          {Socials.map((social) => (
            <Link key={social.name} href={social.href} target="_blank">
              <social.icon className="w-7 h-7 text-stone-600" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 mt-12 mb-12">
        <Separator className="flex-1 bg-stone-600" />
        <div className="flex flex-row items-center gap-1">
          <Circle className="bg-stone-600 rounded-full text-stone-600 w-3 h-3" />
          <Circle className="bg-stone-600 rounded-full text-stone-600 w-3 h-3" />
          <Circle className="bg-stone-600 rounded-full text-stone-600 w-3 h-3" />
        </div>
        <Separator className="flex-1 bg-stone-600" />
      </div>
    </div>
  );
}

const Socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/tharinda__",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tharinda-anurajeewa/",
    icon: Linkedin,
  },
  {
    name: "Github",
    href: "https://github.com/TharindaPrabhath",
    icon: Github,
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/__tharinda__/",
  //   icon: Instagram,
  // },
];
