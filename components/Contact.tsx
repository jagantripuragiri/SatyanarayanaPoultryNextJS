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
      <div className={styles.card}>
        {DETAILS.map(({ icon, label, value, href }) => (
          <div key={label} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
            <strong>{label}:&nbsp;</strong>
            {href ? (
              <a href={href} className={styles.link}>
                {value}
              </a>
            ) : (
              <span>{value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
