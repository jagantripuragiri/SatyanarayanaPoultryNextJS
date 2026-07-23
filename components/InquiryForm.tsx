import styles from "./InquiryForm.module.css";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLScMVaACLT4GzE0s6TyyzLmBL06VjfzD9aT06bO1DK2vPpRy1A/viewform?embedded=true";

export default function InquiryForm() {
  return (
    <section id="inquiry" className={styles.section}>
      <h2 className="section-title">Send Us an Enquiry</h2>
      <p className={styles.subtitle}>
        Fill out the form below and we&apos;ll get back to you shortly.
      </p>
      <div className={styles.wrapper}>
        <iframe
          src={FORM_SRC}
          className={styles.iframe}
          title="Satyanarayana Poultry Farm enquiry form"
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
