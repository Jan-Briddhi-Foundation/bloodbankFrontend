import Header from '../../components/Header/Header';
import style from './NewRequest.module.css';  
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import './DatePicker.css';



function NewRequest() {

  return (
    <>
      <Header />
      <div>
        <h1 className={style.title}>Blood Request</h1>
        <p  className={style.title}>Let the people around you help you.</p>
        <section>
            <input type='text' placeholder='Patient Name' name=''  />
            <div className={`${style.selectContainer} ${style.first}`}>
            <select name="bloodType"  className={`${style.select}`}>
              <option value="" selected className={`${style.selectit}`}>
                Blood Group
              </option>
              <option value="A" className={`${style.selectit}`}>A</option> 
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
            <div className={style.IconContainer}>
                <ArrowDropDownIcon className={style.DropIcon} sx={{ fontSize: 50 }} />
            </div>
            </div>            
            <input type='number' placeholder='Quantity of Blood in Unit' />
            <ReactDatePicker  wrapperClassName="datePicker" />
            <input type='number' placeholder='Quantity of Blood in Unit' />
            <input type='Tel' placeholder='Phone Number'  />
            <input type='text' placeholder='Address' name=''/>
            <input type='Text' placeholder='Location' />

            <button>Send Request</button>



        </section>
      </div>
    </>
  )
}

function ReactDatePicker() {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  }
  return (
    <div>
      <DatePicker 
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText='Date for Blood Needed'
        minDate={ new Date() }
      />
    </div>
  )
}
export default NewRequest;