import styles from "../stylesheets/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <center className={styles.websiteTitleContainer}>
        <span className={styles.websiteTitle}>loans </span>inc.
        <div>Copyright (c) 2021</div>
      </center>
      <div className={styles.phone}>
        <div className={styles.links}>
          <div className={styles.heading}>Links</div>
          <ul>
            <li>Explore</li>
            <li>Privacy Policy</li>
            <li>Terms of Agreement</li>
            <li>Initiatives</li>
            <li>Rates and Charges</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div className={styles.heading}>Reach Us</div>
          <ul className={styles.contactLink}>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className={(styles.links, styles.desktop)}>
        <div className={styles.heading}>Links</div>
        <ul>
          <li>Explore</li>
          <li>Privacy Policy</li>
          <li>Terms of Agreement</li>
          <li>Initiatives</li>
          <li>Rates and Charges</li>
        </ul>
      </div>
      <div className={(styles.contact, styles.desktop)} style={{ order: 2 }}>
        <div className={styles.heading}>Reach Us</div>
        <ul className={styles.contactLink}>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
