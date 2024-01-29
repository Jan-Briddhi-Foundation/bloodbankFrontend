import Header from "../../components/Header/Header";
// import styles from "./NewRequest.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "./DatePicker.css";
import { requestBlood } from "../../apis/BloodRequest";
// import { useNavigate } from "react-router-dom";

function NewRequest() {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  // const redirect = useNavigate();

  const handleInputChange = (input, value) => {
    data[input] = value;
    setData(data);
  };

  const inputClass =
    "flex items-center gap-4 p-2 bg-[#F9F9F9] rounded-[5px] min-h-5 max-w-[90vw] text-start m-[1.8rem] mx-auto w-[39rem] my-0 border ";

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        <h1 className="text-2xl">Blood Request</h1>
        <p>Let the people around you help you.</p>
        <form
          className="w-full flex items-center flex-col gap-4"
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
            className={inputClass}
          />
          <select
            onChange={(e) => handleInputChange("bloodType", e.target.value)}
            name="bloodType"
            required
            className={inputClass}
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
            selected={date}
            onChange={(e) => {
              setDate(e);
              handleInputChange("data_needed", e);
            }}
            dateFormat="MM/dd/yyyy"
            placeholderText="Date for Blood Needed"
            minDate={new Date()}
            className={inputClass}
          />
          <input
            type="number"
            onChange={(e) => handleInputChange("quantity", e.target.value)}
            required
            placeholder="Quantity of Blood in Unit (ltrs)"
            className={inputClass}
          />
          <input
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            type="Tel"
            required
            placeholder="Phone Number"
            className={inputClass}
          />
          <input
            onChange={(e) => handleInputChange("address", e.target.value)}
            type="text"
            required
            placeholder="Address"
            name=""
            className={inputClass}
          />
          <button
            name="intent"
            className="flex items-center gap-4 p-2 rounded-[5px] min-h-5 max-w-[90vw] text-start m-[1.8rem]"
          >
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}

export default NewRequest;
