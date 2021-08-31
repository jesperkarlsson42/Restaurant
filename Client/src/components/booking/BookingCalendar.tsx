import axios from "axios";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { IBooking } from "./Booking";

interface IBookingCalendarProps {
  date: string;
  pickDate(date: string): void;
}

export const BookingCalendar = (props: IBookingCalendarProps) => {
  const [dateValue, setDateValue] = useState(new Date());
  function changeDate(e: any) {
    setDateValue(e);
  }

  function selectDate(e: any) {
    props.pickDate(e.toLocaleDateString());
  }

  async function getAvailableTables() {
    const date = dateValue.toLocaleDateString();
    const data = {
      numberOfGuests: 9,
      date: date
    }
    const res = await axios.post ("http://localhost:8000/booking/getAvailableTables", data);
    console.log(res.data);

    for (let ida = 0; ida < res.data.length; ida++) {
      if(res.data[ida].time === 18) {
        if(res.data[ida].availableTables === false) {
          console.log('disable knapp jäveln för 18'); 
        } else {
          console.log('varmt välkommen klockan 18 motherfucker');
          
        }
      } else if(res.data[ida].time === 21) {
        if(res.data[ida].availableTables === false) {
          console.log('disable knapp jäveln för 21');
        } else {
          console.log('varmt välkommen klockan 21 motherfucker');
        }
      } 
      
    }
    
  }

  function runFunctions(e : any) {
    changeDate(e);
    selectDate(e);
    getAvailableTables();
  }

  return (
    <div>
      <Calendar onChange={runFunctions} 
      value={dateValue} 
      minDate={new Date()}/>
    </div>
  );
};
