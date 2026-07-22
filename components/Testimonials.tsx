import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    quote:
      "We've been buying from Satyanarayana Poultry Farm for over two years. The chicken is always fresh and the pricing is fair.",
    name: "Ramesh Kumar",
    role: "Local Retailer, Vizianagaram",
  },
  {
    quote:
      "Reliable wholesale supply for our restaurant. Deliveries are always on time and the quality is consistent.",
    name: "Lakshmi Prasad",
    role: "Restaurant Owner",
  },
  {
    quote:
      "Visited the farm myself and was impressed by how clean and well-managed it is. Ethical farming you can actually see.",
    name: "Suresh Naidu",
    role: "Regular Customer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <h2 className="section-title">What Our Customers Say</h2>
      <div className={styles.grid}>
        {TESTIMONIALS.map(({ quote, name, role }) => (
          <div key={name} className={styles.card}>
            <div className={styles.stars} aria-hidden="true">
              ★★★★★
            </div>
            <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
            <div className={styles.name}>{name}</div>
            <div className={styles.role}>{role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
