import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { toast } from "react-toastify";

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

  const handleInputChangeNum = (input, value) => {
    if (value >= 1) {
      data[input] = value;
      setData(data);
    } else {
      toast.error("Blood quantity should not be less than 1");
    }
  };

  const inputClass =
    "bg-[#f9f9f9] w-full text-3xl mb-6 py-5 px-6 rounded-lg max-[410px]:text-2xl";

  return userProfileData ? (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Blood Request
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              Let the people around you help you.
            </p>
          </div>

          <form
            className="flex flex-col"
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
              placeholder="Full Name"
              value={userProfileData.userForm.name}
              className={inputClass}
            />
            <input
              type="text"
              name="bloodGroup"
              readOnly
              placeholder="Blood Group"
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
              required
              className={inputClass}
            />
            <input
              type="number"
              onChange={(e) => handleInputChangeNum("quantity", e.target.value)}
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
              placeholder="Phone number"
              className={inputClass}
            />
            <input
              type="text"
              name="address"
              readOnly
              value={userProfileData.profileForm.address}
              placeholder="Address"
              className={inputClass}
            />

            <input
              type="text"
              name="location"
              readOnly
              value={userProfileData.profileForm.location}
              placeholder="Location"
              className={inputClass}
            />

            <button
              name="intent"
              className="mt-20 self-center rounded-md font-roboto text-center px-6 py-4 w-2/5 text-[1.8rem] text-[#f7f7f7] bg-[#ba595f] truncate max-[410px]:mt-10 max-[410px]:w-3/5"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    </>
  ) : (
    <>
      <Header />
      <center>
        <h1>
          <b className="text-3xl">Loading...</b>
        </h1>
      </center>
    </>
  );
}

export default NewRequest;
