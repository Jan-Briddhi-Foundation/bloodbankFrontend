import Header from '../../components/Header/Header';
import style from './NewRequest.module.css';  
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function NewRequest() {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <Header />
      <div>
        <h1>Blood Request</h1>
        <p>Let the people around you help you.</p>
        <section>
            <input type='text' placeholder='Patient Name' name=''/>
            <div className={`${style.selectContainer} ${style.first} `}>
            <select name="bloodType" placeholder='Blood Type' className={` ${style.select}`}>
              <option value="" selected>
                Blood Type
              </option>
              <option value="A">A</option> 
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
            <div className={style.IconContainer}>
                <ArrowDropDownIcon className={style.DropIcon} sx={{ fontSize: 50 }} />
            </div>
            </div>
            <DatePicker    
                 selected={selectedDate}
                 onChange={(date) => setSelectedDate(date)}
                 placeholderText="Date for Blood Needed" 
            />
            <input type='number' placeholder='Quantity of Blood in Unit' />
            <input type="tel" placeholder='Phone Number ' />
        </section>
      </div>
    </>
  )
}

export default NewRequest;
