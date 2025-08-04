"use client";

import { cn } from "@/utils/cn";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

type HeaderProps = {
  url: string;
  linkText: string;
  subCategories: { name: string; href: string }[];
};

export default function HeaderLink({
  url,
  linkText,
  subCategories,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative p-1 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={cn("flex items-center p-2 gap-2", {
          "underline underline-offset-4 font-bold": isOpen,
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{linkText}</p>
        <FaChevronDown
          className={cn("relative transition duration-300 ease-in-out", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      {isOpen && <DropdownMenu subCategories={subCategories} isOpen={isOpen} />}
    </div>
  );
}
