import styles from "./WhyUs.module.css";

const REASONS = [
  {
    icon: "🧼",
    title: "Hygienic Farming",
    desc: "Healthy poultry raised in clean, well-maintained conditions.",
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    desc: "Affordable rates with complete transparency, no hidden costs.",
  },
  {
    icon: "🧑‍🌾",
    title: "Experienced Team",
    desc: "Decades of hands-on farm management expertise.",
  },
  {
    icon: "🤝",
    title: "Trusted by Vendors",
    desc: "A proven track record with local markets and businesses.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <h2 className="section-title">Why Choose Us</h2>
      <div className={styles.grid}>
        {REASONS.map(({ icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
            <div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
