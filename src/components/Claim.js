import { useState } from "react";

import styles from "../stylesheets/Claim.module.css";

import claim from "../assets/claim.jpeg";
import LoanTypes from "./LoanTypes";

const Claim = () => {
  const [data, setData] = useState({
    loanType: "",
    name: "",
    phone: "",
    email: "",
    loanAmount: "",
    state: "Andaman and Nicobar Islands",
  });

  const submitFormData = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <img src={claim} className={styles.claimImage} alt="" />
      <div className={styles.claim}>
        <div className={styles.claimHeading}>Fill in your details</div>
        <LoanTypes
          loanType={data.loanType}
          setLoanType={(type) => {
            setData({ ...data, loanType: type });
          }}
        />
        <form onSubmit={submitFormData} className={styles.formData}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.inputField}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.inputField}
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder="e-Mail"
            className={styles.inputField}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="number"
            placeholder="Loan Amount"
            className={styles.inputField}
            value={data.loanAmount}
            onChange={(e) => setData({ ...data, loanAmount: e.target.value })}
          />
          <select
            placeholder="State"
            className={styles.inputField}
            value={data.state}
            onChange={(e) => setData({ ...data, state: e.target.value })}
          >
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <input
            type="submit"
            value="Proceed"
            className={styles.submitButton}
          />
        </form>
      </div>
    </div>
  );
};

export default Claim;
