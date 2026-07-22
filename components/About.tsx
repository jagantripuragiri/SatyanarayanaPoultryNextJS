import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className="section-title">About Us</h2>
      <div className={styles.body}>
        <p>
          <span className={styles.highlight}>Satyanarayana Poultry Farm</span>{" "}
          is a trusted name in the poultry industry, committed to delivering
          high-quality poultry products. With years of experience and a strong
          focus on hygiene, nutrition, and ethical farming, we ensure the best
          standards for our customers.
        </p>
      </div>
    </section>
  );
}
