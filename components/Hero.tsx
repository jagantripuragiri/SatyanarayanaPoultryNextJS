import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Background image via next/image for optimised delivery */}
      <div className={styles.bg}>
        <Image
          src="/images/farm.png"
          alt="Satyanarayana Poultry Farm"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.badge}>🐔 Fresh &amp; Hygienic</span>
        <h2 className={styles.headline}>
          Quality Chicken, Trusted by Hundreds&nbsp;of People
        </h2>
        <p className={styles.sub}>
          Providing healthy poultry products with traditional values and modern
          farming practices.
        </p>
        <Link href="#contact" className={styles.cta}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
