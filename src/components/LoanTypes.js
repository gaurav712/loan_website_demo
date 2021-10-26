import styles from "../stylesheets/LoanTypes.module.css";

import Vehicle from "../assets/car.svg";
import Home from "../assets/home.svg";
import Education from "../assets/education.svg";
import Business from "../assets/business.svg";

const LoanTypes = ({ loanType, setLoanType }) => {
  const loans = [
    { type: "Home", image: Home },
    { type: "Vehicle", image: Vehicle },
    { type: "Education", image: Education },
    { type: "Business", image: Business },
  ];

  const ServiceCard = ({ type, image }) => (
    <div
      className={type === loanType ? styles.cardSelected : styles.card}
      onClick={() => {
        setLoanType(type);
      }}
    >
      <img src={image} className={styles.svg} alt="" />
      <div className={styles.cardTitle}>{type}</div>
    </div>
  );

  return (
    <div className={styles.container}>
      {loans.map((loanItem) => (
        <ServiceCard type={loanItem.type} image={loanItem.image} />
      ))}
    </div>
  );
};

export default LoanTypes;
