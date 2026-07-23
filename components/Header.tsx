"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  { href: "#inquiry", label: "Enquiry" },
  { href: "#map", label: "Map" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Satyanarayana Poultry Farm</h1>
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.toggleIcon} aria-hidden="true" />
      </button>
      <nav
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        aria-label="Main navigation"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
