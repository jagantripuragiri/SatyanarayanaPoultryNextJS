import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#map", label: "Map" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Satyanarayana Poultry Farm</h1>
      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.navLink}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
