import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t80n5gp', 'template_o4fu5u2', form.current, {
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
    <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0 px-4 md:px-0">
      {/* Get in Touch section */}
      <section className="mb-8 w-[25%] w-full md:w-1/3">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <div className="mb-8"><h1 className='text-xl font-bold '>ADDRESS</h1>
        <p >Ballupet - Magge Rd, Jinagaravalli, Hosagadde,Karnataka  573214.</p></div>
        <div className="mb-8"><h1 className='text-xl font-bold '>PHONE NO</h1>
        <p>Phone No.: +918792616548</p></div>
        <div className=""><h1 className='text-xl font-bold '>EMAIL</h1>
        <p>Info@havalaplantationstay.com</p></div>
      </section>

      {/* Form section */}
      <section className='flex w-[40%] w-full md:flex-row flex-col md:w-1/2'>
        {/* Add your map component here */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.2963674650397!2d-122.08481358489833!3d37.4219997798203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858083b675b1b7%3A0x9ff7b34e86e8fcf5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1638866477423!5m2!1sen!2sus" width="300" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        <div className='bg-gray-300'>
        <form onSubmit={sendEmail}  ref={form} className="space-y-4 px-8">
          <div>
            <label htmlFor="name" className="block">Name *</label>
            <input type="text"  name="userName" className="w-full border-gray-00 rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block">Email *</label>
            <input type="email"  name="userEmail" className="w-full border-gray-00 rounded-md" required />
          </div>
          <div>
            <label htmlFor="subject" className="block">Subject *</label>
            <input type="text"  name="userSubject" className="w-full border-gray-00 rounded-md" required />
          </div>
          <div>
            <label htmlFor="message" className="block">Comment or Message *</label>
            <textarea name="userMessage" rows="4" className="w-full border-gray-00 rounded-md" required></textarea>
          </div>
          <div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Send Message</button>
          </div>
        </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;