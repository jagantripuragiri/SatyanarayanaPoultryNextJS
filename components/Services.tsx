import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: "🐔",
    title: "Broiler Chicken Supply",
    desc: "Healthy and well-maintained broiler chickens raised with care.",
  },
  {
    icon: "🚚",
    title: "Online Delivery",
    desc: "We supply fresh poultry products with convenient online delivery.",
  },
  {
    icon: "📦",
    title: "Wholesale Supply",
    desc: "Bulk poultry supply for markets, hotels, and businesses.",
  },
  {
    icon: "🌾",
    title: "Farm Consultation",
    desc: "Visit our farm and experience our ethical farming practices first-hand.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <h2 className="section-title">Our Services</h2>
      <div className={styles.grid}>
        {SERVICES.map(({ icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
