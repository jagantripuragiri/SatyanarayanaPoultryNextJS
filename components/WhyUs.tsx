import styles from "./WhyUs.module.css";

const REASONS = [
  "Hygienic and healthy poultry farming",
  "Affordable and transparent pricing",
  "Experienced farm management",
  "Trusted by local vendors",
];

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <h2 className="section-title">Why Choose Us</h2>
      <ul className={styles.list} role="list">
        {REASONS.map((reason) => (
          <li key={reason} className={styles.item}>
            <span className={styles.check} aria-hidden="true">
              ✔
            </span>
            {reason}
          </li>
        ))}
      </ul>
    </section>
  );
}
