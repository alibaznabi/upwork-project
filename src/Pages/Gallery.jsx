import React, { useState, useEffect } from 'react';
import { Gallery0, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,Gallery6,Gallery7,Gallery8,Gallery9,Gallery10,Gallery11 } from '../assets';
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { GrClose } from "react-icons/gr";


const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const images = [
    Gallery0,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <h1 className='font-bold text-center text-5xl p-4'>Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => openLightbox(index)}
            className='cursor-pointer w-full h-64 object-cover'
            style={{ cursor: 'pointer', width: '100%'}}
          />
        ))}
      </div>
      {isOpen && (
        <div className="lightbox absolute inset-0 flex items-center justify-center"   style={{
            backgroundColor: 'rgba(0,  0,  0, 0.8)', // Semi-transparent black background
            zIndex:  1000, // Ensure the lightbox is above other content
          }}>
          <button onClick={() => setPhotoIndex((photoIndex + images.length -  1) % images.length )}className="absolute bottom-0 left-0 top-[10%] p-4 text-white sm:top-[50%] sm:left-auto sm:right-0 sm:bottom-auto"><GrCaretPrevious /></button>
         <div className="w-full  md:w-[900px]">
         <img src={images[photoIndex]} alt={`Gallery ${photoIndex}`} className='object-cover h-full w-full'/>
         </div>
          <button onClick={closeLightbox} className=' top-0 right-0 text-white p-4 sm:top-auto sm:right-auto sm:bottom-0 sm:left-0'><GrClose />
</button>
          <button onClick={() => setPhotoIndex((photoIndex +  1) % images.length)} className="absolute top-0 right-0 p-4 text-white top-[50%] %] sm:right-auto sm:bottom-auto sm:left-0"><GrCaretNext /></button>
        </div>
      )}
    </div>
  );
};

export default Gallery;