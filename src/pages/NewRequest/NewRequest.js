import Header from "../../components/Header/Header";
import style from "./NewRequest.module.css";
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
      <div className={style.container}>
        <h1 className={style.title}>Blood Request</h1>
        <p className={style.title}>Let the people around you help you.</p>
        <form
          className={style.form}
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
          />
          <select
            onChange={(e) => handleInputChange("bloodType", e.target.value)}
            name="bloodType"
            requir
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
            className={style.datePicker}
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
          />
          <input
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            type="Tel"
            required
            placeholder="Phone Number"
          />
          <input
            onChange={(e) => handleInputChange("address", e.target.value)}
            type="text"
            required
            placeholder="Address"
            name=""
          />
          <button name="intent" className={style.button}>
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}

export default NewRequest;
