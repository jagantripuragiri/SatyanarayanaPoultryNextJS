import { SERVICE_AREAS } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Serving {SERVICE_AREAS.join(", ")} and nearby areas.</p>
      <p>
        &copy; {year} Satyanarayana Poultry Farm | All Rights Reserved
      </p>
    </footer>
  );
}
