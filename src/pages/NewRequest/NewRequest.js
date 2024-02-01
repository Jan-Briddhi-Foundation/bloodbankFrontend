import Header from "../../components/Header/Header";
// import styles from "./NewRequest.module.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "./DatePicker.css";
import { requestBlood } from "../../apis/BloodRequest";
import { useNavigate } from "react-router-dom";
import { getProfileDetails } from "../../apis/Profile";

function NewRequest() {
  const [userProfileData, setuserProfileData] = useState();
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const redirect = useNavigate();

  const profileDetails = async () => {
    const result = await getProfileDetails();
    setuserProfileData(result);
  };

  useEffect(() => {
    profileDetails();
  }, []);

  const handleInputChange = (input, value) => {
    data[input] = value;
    setData(data);
  };

  const inputClass =
    "flex items-center gap-4 p-2 bg-[#F9F9F9] rounded-[5px] min-h-5 max-w-[90vw] text-start m-[1.8rem] mx-auto w-[39rem] my-0 border ";

  return userProfileData ? (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        <h1 className="text-2xl">Blood Request</h1>
        <p>Let the people around you help you.</p>
        <form
          className="w-full flex items-center flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            requestBlood({
              date_needed: new Date(data.data_needed)
                .toISOString()
                .split("T")[0],
              quantity: data.quantity,
            });

            redirect("/requestsent");
          }}
        >
          <input
            type="text"
            name="name"
            readOnly
            value={userProfileData.userForm.name}
            className={inputClass}
          />
          <input
            type="text"
            name="bloodGroup"
            readOnly
            value={userProfileData.profileForm.bloodGroup}
            className={inputClass}
          />

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
            type="text"
            name="phone"
            readOnly
            maxLength="10"
            value={userProfileData.userForm.phone}
            className={inputClass}
          />
          <input
            type="text"
            name="address"
            readOnly
            value={userProfileData.profileForm.address}
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
  ) : (
    <>
      <Header />
      <center>
        <h1>
          <b>Loading...</b>
        </h1>
      </center>
    </>
  );
}

export default NewRequest;
