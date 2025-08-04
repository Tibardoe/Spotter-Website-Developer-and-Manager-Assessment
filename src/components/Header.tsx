import Image from "next/image";
import React from "react";
import HeaderLink from "./HeaderLink";
import { menu } from "@/data/links";
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-8 py-4 headerBg flex items-center justify-between fixed w-full">
      <ul className="flex items-center gap-5">
        {menu.map((item) => (
          <li key={item.title}>
            {item.isDropdown ? (
              <HeaderLink
                url={item.href || "#"}
                linkText={item.title}
                subCategories={item.subCategories || []}
              />
            ) : (
              <Link
                href={item.href || "#"}
                className="hover:font-bold hover:underline hover:underline-offset-4"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <Link href="/" className="flex items-center gap-2">
        <Image
          src="assets/images/spotterLogo.svg"
          alt="Spotter Logo"
          width={30}
          height={30}
        />

        <p className="text-2xl">Spotter</p>
      </Link>
    </div>
  );
}
