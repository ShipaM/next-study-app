"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Navlink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: Navlink[];
};

export const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks?.map((link: Navlink) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};
