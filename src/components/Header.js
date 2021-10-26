import { Link } from "react-router-dom";

import styles from "../stylesheets/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.websiteTitle}>
        <Link to="/">loans</Link>
      </div>
      <ul className={styles.navBarList}>
        <li>Loans</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className={styles.loginButton}>Login</button>
    </div>
  );
};

export default Header;
