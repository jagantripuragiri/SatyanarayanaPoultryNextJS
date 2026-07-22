import styles from "./Process.module.css";

const STEPS = [
  {
    emoji: "🐣",
    title: "Healthy Chicks",
    desc: "We start with high-quality chicks sourced from trusted hatcheries.",
  },
  {
    emoji: "🌾",
    title: "Nutritious Feed",
    desc: "Balanced and hygienic feed is provided for healthy growth.",
  },
  {
    emoji: "🧼",
    title: "Clean Environment",
    desc: "Our farm follows strict cleanliness and bio-security measures.",
  },
  {
    emoji: "🚚",
    title: "Timely Supply",
    desc: "We ensure fresh and timely delivery to our customers.",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <h2 className="section-title">Our Farm Process</h2>
      <div className={styles.grid}>
        {STEPS.map(({ emoji, title, desc }) => (
          <div key={title} className={styles.card}>
            <span className={styles.emoji} aria-hidden="true">
              {emoji}
            </span>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
