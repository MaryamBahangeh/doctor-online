"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./Header.module.css";
import Button, { Variant } from "@/components/Button/Button";

const pages = [
  { href: "/", title: "Home" },
  { href: "/search", title: "Search" },
  { href: "/about", title: "About" },
  { href: "/myPanel", title: "My Panel" },
];

function Header() {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className={clsx(pathName === page.href && styles.active)}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant={Variant.OUTLINE}>Login/ Sign up</Button>
    </header>
  );
}

export default Header;
