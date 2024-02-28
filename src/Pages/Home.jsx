import React from "react";
import { Carousel, Footer } from "flowbite-react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


import {
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Sec1,
  Sec2,
  Sec3,
  Sec4,
  Sec5
} from "../assets/index";
import Searchbar from "../Layouts/Searchbar";
import Experience from "../Layouts/Experience";


const Home = () => {
  const data = [
    {
      title: "BOOST YOUR DAILY DOSE OF ENDORPHINE",
      img: Slider1,
    },
    {
      title: "PRIME LOCATION WORTHY OF YOUR EXPLORATION",
      img: Slider2,
    },
    {
      title: "AN INSTANT MOOD CHANGER",
      img: Slider4,
    },
  ];

  // Constructing an array of section images
  const sectionImages = [
    {
      value: Sec1,
    },
    {
      value: Sec2,
    },
    {
      value: Sec3,
    },
    {
      value: Sec4,
    },
    {
      value: Sec5
    }
  ];

  const titleStyle = {
    animation: "slideIn 5s ease forwards",
  };

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 3;
              transform: translateY(-20px);
            }
            to {
              opacity: 2;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div className="container mx-auto px-2">
        <Carousel>
          {data.map(({ title, img }, index) => (
            <div
              key={index}
              className="relative"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90vh",
                width: "100%",
              }}
            >
              <div
                className="absolute z-20 top-[50%] left-[30%] flex justify-center text-white font-[700] text-2xl"
                style={titleStyle}
              >
                {title}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <Searchbar />
      </div>

      {/* about us section starts here */}
      <section className="flex flex-col lg:flex-row justify-center space-around max-sm:px-9">
        <div className="w-full sm:w-1/2  md:w-1/2 lg:w-1/2 xl:w-1/2 text-left">
          <h1 className="font-bold text-3xl mt-5 text-center ">
            ABOUT US
          </h1>
          <p className="w-full sm:w-3/4 mx-auto mt-5 flex flex-col gap-2">
          Discover serenity in Sakleshpur at Havala plantation stay, nestled amidst mist-kissed hills
and lush coffee plantations. Wake up to breathtaking views, relish authentic Malnad cuisine,
and embark on thrilling adventures with nearby trekking trails. <span> Our cosy accommodations
and warm hospitality create the perfect retreat for nature lovers and adventure seekers alike.</span>
Escape the ordinary and immerse yourself in the beauty of Sakleshpur at our homestay –
where every moment becomes a cherished memory
          </p>
        </div>
        <div className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mr-6">
          <Carousel
            className="h-[60vh]"
            indicators={false}
            leftControl={<FaArrowLeftLong className="text-white text-3xl" />}
            rightControl={<FaArrowRightLong className="text-white text-3xl" />}
          >
            {sectionImages.map((img,index) => (
              <img key={index} src={img.value} className="w-full h-[100%] object-cover" />
            ))}
          </Carousel>
        </div>
      </section>
      <Experience/>
    </>
  );
};

export default Home;
