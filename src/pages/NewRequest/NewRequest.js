import Header from "../../components/Header/Header";
import styles from "./NewRequest.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "./DatePicker.css";
import { requestBlood } from "../../apis/BloodRequest";
import { useNavigate } from "react-router-dom";

function NewRequest() {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const redirect = useNavigate();

  const handleInputChange = (input, value) => {
    data[input] = value;
    setData(data);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Blood Request</h1>
        <p className={styles.title}>Let the people around you help you.</p>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
            const requestSent = requestBlood({
              date_needed: date,
              quantity: data.quantity,
            });
            console.log(requestSent);
            // if (requestSent.success) {
            //   redirect("/requestsent");
            // }
          }}
        >
          <input
            onChange={(e) => handleInputChange("patientName", e.target.value)}
            type="text"
            required
            placeholder="Patient Name"
            name=""
            className={styles.data1}
          />
          <select
            onChange={(e) => handleInputChange("bloodType", e.target.value)}
            name="bloodType"
            required
            className={styles.data1}
          >
            <option value="" selected>
              Blood Group
            </option>
            <option value="A+">O+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <DatePicker
            className={styles.datePicker}
            selected={date}
            onChange={(e) => {
              setDate(e);
              handleInputChange("data_needed", e);
            }}
            dateFormat="MM/dd/yyyy"
            placeholderText="Date for Blood Needed"
            minDate={new Date()}
            
          />
          <input
            type="number"
            onChange={(e) => handleInputChange("quantity", e.target.value)}
            required
            placeholder="Quantity of Blood in Unit (ltrs)"
            className={styles.data1}
          />
          <input
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            type="Tel"
            required
            placeholder="Phone Number"
            className={styles.data1}
          />
          <input
            onChange={(e) => handleInputChange("address", e.target.value)}
            type="text"
            required
            placeholder="Address"
            name=""
            className={styles.data1}
          />
          <button name="intent" className={styles.button}>
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}

export default NewRequest;
