import { Label, TextInput } from 'flowbite-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'


function Searchbar() {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h8imy85', 'template_hmyjwbd', form.current, {
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
    <form onSubmit={sendEmail} ref={form} className="flex flex-col sm:flex-row justify-center items-center bg-[rgba(0,0,0,0.5)] py-3 relative  -top-[6rem] text-white gap-6 max-sm:gap-8   lg:gap-10 max-xl:gap-12 lg:pl-12 sm:ml-5 px-4">
      <div className='w-full mx-sm:w-auto'>
        <div className="mb-3 text-left">
          <Label htmlFor="check-in" value="Check-In" className='text-white font-bold' />
        </div>
        <TextInput name="checkin" type="date" sizing="" placeholder="FEBRUARY   5   2060" className='rounded-0 text-black' required />
      </div>
      <div className='w-full mx-sm:w-auto'>
        <div className="mb-3 block text-left text-bold">
          <Label htmlFor="check-out" value="Check-Out" className='text-white font-bold' />
        </div>
        <TextInput name="checkout" type="date" sizing="" placeholder="FEBRUARY   5   2060" className='rounded-0 text-black w-max-content' required />
      </div>
      <div className='w-full mx-sm:w-auto'>
        <div className="mb-3 block text-left">
          <Label htmlFor="guests" value="Guest" className='text-white font-bold' />
        </div>
        <TextInput name="guests" type="number" sizing="" className='' required />
      </div>
      <div className='mt-6 w-full max-sm:w-auto pl-8'>
        <button className='bg-green-700  font-bold rounded-0 px-16 py-3'>Book Now</button>
      </div>
    </form>
  );
}

export default Searchbar;