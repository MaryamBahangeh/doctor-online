"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./Header.module.css";

const pages = [
  { href: "/", title: "home" },
  { href: "/search", title: "search" },
  { href: "/about", title: "about" },
  { href: "/myPanel", title: "my panel" },
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
      <button>Login/ Sign up</button>
    </header>
  );
}

export default Header;
