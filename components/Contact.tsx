import styles from "./Contact.module.css";
import { ADDRESS, EMAIL, HOURS_DISPLAY, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const ICONS = {
  address: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s7-6.1 7-12A7 7 0 0 0 5 10c0 5.9 7 12 7 12Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hours: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const DETAILS = [
  {
    icon: ICONS.address,
    label: "Address",
    value: ADDRESS,
    href: null,
  },
  {
    icon: ICONS.phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
  },
  {
    icon: ICONS.email,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: ICONS.hours,
    label: "Hours",
    value: HOURS_DISPLAY,
    href: null,
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
