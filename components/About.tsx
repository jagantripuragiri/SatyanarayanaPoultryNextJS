import { SERVICE_AREAS } from "@/lib/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className="section-title">About Us</h2>
      <div className={styles.body}>
        <p>
          <span className={styles.highlight}>Satyanarayana Poultry Farm</span>{" "}
          is a trusted poultry farm in Vizianagaram, committed to delivering
          high-quality poultry products. With years of experience and a strong
          focus on hygiene, nutrition, and ethical farming, we ensure the best
          standards for our customers.
        </p>
        <p>
          If you&apos;re searching for chicken farms or farms near you, we
          proudly supply fresh broiler chicken and wholesale poultry to{" "}
          {SERVICE_AREAS.join(", ")}, and surrounding villages.
        </p>
      </div>
    </section>
  );
}
