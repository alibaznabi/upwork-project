import React,{useState,useRef} from "react";
import { FaUser } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import emailjs from '@emailjs/browser'


const PackageCard = ({
  title,
  priceAdult,
  priceChild,
  people,
  peopleIcon,
  breakfast,
  breakfastIcon,
  lunchNonvegIcon,
  lunchNonveg,
  lunchVegIcon,
  lunchVeg,
  eveningSnackIcon,
  eveningSnack,
  dinnerNonvegIcon,
  dinnerNonveg,
  dinnervegIcon,
  dinnerVeg,
  cakeFlavorsIcon,
  cakeFlavors,
  decorationsIcon,
  decorations,
  cardStyle,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }
///there for inquariry button
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_awkemcm', 'template_o4fu5u2', form.current, {
        publicKey: 'kDMflCSL9iWyR_s0x',
      })
      .then(
        () => {
          alert('Email sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="pt-10 mt-7 rounded-lg shadow-md w-full sm:w-[40%] px-5 py-4 flex flex-col justify-between gap-3 mb-10">
      <div className="">
        <h3 className="text-xl py-4 text-white font-semibold text-center bg-green-600 rounded-tr-lg rounded-tl-lg">
          {title}
        </h3>
        <div className="flex  justify-between px-2 py-3 ">
          <div className="flex flex-col items-center justify-center">
            <span><FaUser className="text-4xl" /></span>
            <p>Adult</p> <span className={cardStyle}>Rs {priceAdult}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span><HiUsers className="text-4xl" /></span>
            <div>
              <p>Child</p>
              <span className={cardStyle}>Rs {priceChild}</span>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <span><FaRegCalendarCheck className="text-4xl" /></span>
            <div>
              <p> Check-In </p>
              <p>11:00am</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span><LuCalendarClock className="text-4xl" /></span>
            <div>
              <p> Check-Out</p>
              <p>01:00pm</p>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="">
        <div className="flex">
          <div className="flex items-center gap-9 mt-3 ">
        <span className="text-4xl">{breakfastIcon}</span>
          <p className="ml-3">Complimentary Breakfast: {breakfast}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-9 mt-3">
            <span className="text-4xl ">{lunchNonvegIcon}</span>
          {lunchNonveg && <p className="ml-3">Lunch (Non-veg): {lunchNonveg} </p>}</div>
        </div>
        <div className="flex items-center gap-9 mt-3">
        <span className="text-4xl">{lunchVegIcon}</span>
        {lunchVeg && <p className="ml-3">Lunch (Veg): {lunchVeg}</p>}
        </div>
        <div className="flex items-center gap-9 mt-3">
        <span className="text-4xl">{eveningSnackIcon}</span>
        {eveningSnack && <p className="ml-3">Evening Snack: {eveningSnack}</p>}
        </div>
        <div className="flex items-center gap-9 mt-3">
          <span className="text-4xl">{dinnerNonvegIcon}</span>
        {dinnerNonveg && <p className="ml-3">Dinner (Non-veg): {dinnerNonveg}</p>}</div>
        <div className="flex items-center gap-9 mt-3">
        <span className="text-4xl">{dinnervegIcon}</span>
        {dinnerVeg && <p className="ml-3">Dinner (Veg): {dinnerVeg}</p>}
        </div>
        {cakeFlavors && (
          <div>
        <div className="flex items-center gap-9 mt-3">
        <span className="text-4xl">{cakeFlavorsIcon}</span>
            <p className="ml-3">Cake Flavors: {cakeFlavors.join(", ")}</p>
        </div>
            <div className="flex items-center gap-9 mt-3">
            <span className="text-4xl">{decorationsIcon}</span>
            <p className="ml-3">Decorations: {decorations.join(", ")}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center ">
        <button
        onClick={togglePopup}
        className=" rounded border bg-green-600  text-white font-bold py-3 sm:py-5 px-8 max-sm:px-16 ">
          ENQUIRE
        </button>
      </div>
      {isPopupOpen && (
        <div className=" inset-0 flex items-center justify-center z-50 absolute bg-[rgba(0,0,0,0.5)]">
          <div className="bg-gray-100 p-6 rounded relative shadow-lg w-[35%]">
            {/* Popup form goes here */}
            <button
            onClick={togglePopup}
            className=" top-0 absolute right-2 text-xl text-gray-500 hover:text-black-700"
            >X</button>
            <form onSubmit={sendEmail} ref={form} className="flex flex-col  rounded relative">
              {/* Form fields */}
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email Id*" />
              <input type="number" placeholder="Phone No*" />
              <textarea name="" id="" cols="10" rows="10"></textarea>
              <button type="submit" className="bg-green-600 mt-3 py-3 ">Submit</button>
            </form>
          </div>
          </div>
      )}
    </div>
  );
};

export default PackageCard;
