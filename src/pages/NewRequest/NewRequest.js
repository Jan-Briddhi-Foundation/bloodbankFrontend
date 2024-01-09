import Header from "../../components/Header/Header";
import style from "./NewRequest.module.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "./DatePicker.css";
import { requestBlood } from "../../apis/BloodRequest";

function NewRequest() {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  
  const handleInputChange = (input, value) => {
    data[input] = value;
    setData(data);
  } 

  return (
    <>
      <Header />
      <div>
        <h1 className={style.title}>Blood Request</h1>
        <p className={style.title}>Let the people around you help you.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
            requestBlood({date_needed: data.date_needed, quantity: data.quantity});
          }}
        >
          <input
            onChange={(e) => handleInputChange("patientName", e.target.value)}
            type="text"
            required
            placeholder="Patient Name"
            name=""
          />
          <div className={`${style.selectContainer} ${style.first}`}>
            <select
              onChange={(e) => handleInputChange("bloodType", e.target.value)}
              name="bloodType"
              required
              className={`${style.select}`}
            >
              <option value="" selected className={`${style.selectit}`}>
                Blood Group
              </option>
              <option value="A" className={`${style.selectit}`}>
                A
              </option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
          </div>
          <DatePicker
            selected={date}
            onChange={(e) => {setDate(e); handleInputChange("data_needed", e)}}
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
          <button name="intent">Send Request</button>
        </form>
      </div>
    </>
  );
}

export default NewRequest;
