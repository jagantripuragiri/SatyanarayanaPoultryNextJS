import styles from "./Contact.module.css";

const DETAILS = [
  {
    icon: "📍",
    label: "Address",
    value: "D.Tallavalasa, Jonnada, Denkada Mandal, Vizianagaram District",
    href: null,
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9989980401",
    href: "tel:+919989980401",
  },
  {
    icon: "📧",
    label: "Email",
    value: "SatyanarayanaPoultry@gmail.com",
    href: "mailto:SatyanarayanaPoultry@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-title">Contact Us</h2>
      <p className={styles.subtitle}>
        Have a question or want to place an order? Reach us any of these ways.
      </p>
      <div className={styles.grid}>
        {DETAILS.map(({ icon, label, value, href }) => (
          <div key={label} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
            <strong className={styles.label}>{label}</strong>
            {href ? (
              <a href={href} className={styles.link}>
                {value}
              </a>
            ) : (
              <span className={styles.value}>{value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
