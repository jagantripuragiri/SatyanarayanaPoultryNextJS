import styles from "./MapEmbed.module.css";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5157489870313!2d83.4285625!3d18.0274375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bfd44ad911d5d%3A0xe0c373e5ebdec516!2sSatyanarayana+Poultry+Farm!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export default function MapEmbed() {
  return (
    <section id="map" className={styles.section}>
      <h2 className="section-title">Our Location</h2>
      <div className={styles.wrapper}>
        <iframe
          src={MAP_SRC}
          className={styles.iframe}
          title="Satyanarayana Poultry Farm location on Google Maps"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
