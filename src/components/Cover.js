import styles from "../stylesheets/Cover.module.css";

import CoverImage from "../assets/cover.jpg";
import CoverImagePortrait from "../assets/cover_portrait.jpg";

const Cover = () => {
  return (
    <div className={styles.container}>
      <img src={CoverImage} className={styles.coverImage} alt="" />
      <img
        src={CoverImagePortrait}
        className={styles.coverImagePortrait}
        alt=""
      />
    </div>
  );
};
export default Cover;
