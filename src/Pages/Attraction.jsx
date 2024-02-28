import React from 'react'
import { Attraction1,Attraction3,Attraction4,Attraction5,Attraction6,Attractions15,Attraction16,Attraction17,Attraction7,Attraction8,Attraction9,Attraction10,Attraction18,Attraction2,Attraction11,Attraction12,Attraction19,Attraction14,Attraction13,Attraction20} from '../assets'


const Attraction = () => {
  return (
    <div className=''>
      <div>
      <div className=''><h1 className=' flex font-bold justify-center text-4xl p-6 color-green'>WATER FALLS</h1></div>
      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
        <div className="w-full sm:w-[35%]">
          <h1 className='font-bold text-2xl '>Hadlu Waterfalls</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE   31 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Venture to Hadlu Waterfalls, surrounded by dense forests and coffee plantations. The trek to the
            falls is an adventure in itself, offering a rewarding experience for nature lovers</p>
        </div>
        <div className="w-full sm:w-[40%]">
          <img src={Attraction1} alt="Hadlu Waterfalls" className="mb-4 h-[50vh] object-fill"/>
        </div>
      </div>

      {/* next----------- */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="w-full sm:w-[40%]">
          <img src={Attraction3} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="w-full sm:w-[35%]">
          <h1 className='font-bold text-2xl'>Magajahalli Waterfalls</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 39 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> Enjoy a short trek to Magajahalli Waterfalls, a hidden gem surrounded by dense forests.
The cascading water and natural beauty make it a refreshing spot for a day excursion</p>
        </div>
      </div>

      {/* -------next--------- */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Abhi Falls (Hanbal)</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 39 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Experience the hidden gem of Abhi Falls in Hanbal, a tranquil and lesser-known waterfall
nestled amidst the dense forests. The journey to reach this secluded spot is an exploration of nature's beauty.</p>
        </div>
        <div className="sm:w-[40%] w-full object-cover">
          <img src={Attraction4} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-cover w-full"/>
        </div>
      </div>

      {/* ---------next---------- */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="sm:w-[40%] w-full">
          <img src={Attraction5} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Kadumane Falls</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 40 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>40km Venture into the heart of nature to discover Kadumane Falls, a cascading spectacle surrounded
by lush greenery. The trek to the falls is an adventure, and the reward is the refreshing sight and sound of the water in a pristine setting.</p>
        </div>
      </div>

      {/* ----------next---------------- */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Mookanamane Falls</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 42 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> Embark on a journey to Mookanamane Falls, where the cascading waters create a
mesmerizing sight against the backdrop of verdant forests. The trek to the falls promises an immersive experience in the lap of pristine nature.</p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attractions15} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
      </div>

      {/* ------------next----------- */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="sm:w-[40%] w-full">
          <img src={Attraction16} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Mallali Falls</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 57 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> Mallali Falls is a captivating waterfall situated in the scenic town of Sakleshpur in Karnataka, India. Enclosed by verdant landscapes, it provides a tranquil and picturesque spot for visitors seeking natural beauty in the Sakleshpur region.</p>
        </div>
        
      </div>
      </div>

      {/* tepm section start here */}

      <div>
      <div className=''><h1 className=' flex font-bold justify-center text-4xl p-6'>TEMPLE</h1></div>
      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
    
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Shri Parvatammana Guddi Betta</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 5.3 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>  Ascend to the spiritual heights of Shri Parvatammana Guddi Betta, where a hilltop temple offers panoramic views of the surrounding landscape. Immerse yourself in serenity and awe-inspiring vistas.
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction17} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
      </div>

      {/* ========next========== */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="sm:w-[40%] w-full">
          <img src={Attraction6} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Sri Sakleshwara Swamy Temple</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 17 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>m Pay a visit to the Sri Sakleshwara Swamy Temple, an ancient temple dedicated
to Lord Shiva. The temple's architecture and spiritual ambiance attract pilgrims and tourists alike
          </p>
        </div>
        
      </div>

{/* -----------next---------- */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
      
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Betttada Byreshwara Temple</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 52 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Discover the ancient Bettada Byreshwara Temple, dedicated to Lord Shiva. The
temple's architecture and serene surroundings make it a peaceful place for spiritual seekers
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction7} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
      </div>
      </div>

      {/* ----------treking section --------- */}
      <div>
      <div className=''><h1 className=' flex font-bold justify-center text-4xl p-6 color-green'>TREKKING</h1></div>
      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="sm:w-[40%] w-full object-cover">
          <img src={Attraction8} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] w-full object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Patla Betta</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 45 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> m Conquer the heights of Patla Betta, offering a trekking experience that rewards you with breathtaking views of the Western Ghats. The summit provides a stunning vantage point to soak in the beauty of the surrounding landscapes
          </p>
        </div>
      </div>

      {/* ========next========== */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Gavi Betta:</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 47 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> For trekking enthusiasts, Gavi Betta offers a thrilling trek with panoramic views of the surrounding hills and valleys. The summit provides a stunning vantage point to admire the natural beauty of Sakleshpur
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction9} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-cover w-full"/>
        </div>
      </div>

{/* -----------next---------- */}
<div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
<div className="sm:w-[40%] w-full">
          <img src={Attraction10} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>PANDAVARA GUDDA</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 52 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> Gear up for an exciting adventure by adding Pandavar Gudda to your itinerary for
Sakleshpur vacation. Pandavar Gudda is popular in Indian mythology as a place which was once the abode of Pandavas
during their vanavas in Mahabharata.This tourist spot also incites historical interest among visitors with the presence of one temple that is about a 1000 year old as estimated by Archaeological Survey of India.
          </p>
        </div>
        
      </div>

{/* ------------next--------- */}

<div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Ettina Bhuja</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 56 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Ehina Bhuja Sakleshpur is a serene hill station nestled in the Western Ghats of Karnataka, India,
offering breathtaking views of lush green landscapes and mist-covered mountains
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction18} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
      </div>

      {/* ------next--------- */}

<div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
<div className="sm:w-[40%] w-full">
          <img src={Attraction2} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill w-full"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Jenukal Gudda</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 89 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Embark on a trek to Jenukal Gudda, the second-highest peak in Karnataka. The trek offers
challenging trails and rewards trekkers with stunning views from the summit.
          </p>
        </div>
        
      </div>
      </div>

      {/* ======other view points---------- */}
      <div>
      <div className=''><h1 className=' flex font-bold justify-center text-3xl p-6 color-green'>OTHER VIEW POINTS AND SANCTUARY</h1></div>
      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="sm:w-[40%] w-full">
          <img src={Attraction11} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Shetti halli church</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 20 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Rosary Church in Hassan is a lesser known destination but a must visit for people interested in exploring the ruins of historic importance. Located on the banks of Hemavathi river, the uniqueness of the church lies in the unbelievable fact that the entire church structure gets submerged in the river during monsoons
          </p>
        </div>
        
      </div>

      {/* ========next========== */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100 '>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Manjarabad Fort</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 23 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Explore the historic Manjarabad Fort, an ancient star-shaped fort built by Tipu Sultan. Enjoy
panoramic views of the Western Ghats and the surrounding landscape.
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction12} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill w-full"/>
        </div>
      </div>

{/* -----------next---------- */}

<div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
<div className="sm:w-[40%] w-full">
          <img src={Attraction19} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Kadamane Tea Estate</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 40 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> Discover serenity in Sakleshpur at Kadamane Tea Estate. Explore lush tea plantations,
enjoy guided tours, and savour locally crafted tea amidst nature's beauty. The perfect retreat for tea enthusiasts and nature lovers alike.
          </p>
        </div>
      </div>
{/* ------------next--------- */}

<div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100 '>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Bisleghat</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 54 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p>Head to Bisle Ghat Viewpoint for breathtaking vistas of the Western Ghats and the Kumaradhara River Valley. It's an ideal spot for nature enthusiasts and photographers
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction14} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill w-full"/>
        </div>
      </div>

      {/* ------next--------- */}
      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4'>
      <div className="sm:w-[40%] w-full">
          <img src={Attraction13} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>Safaris at Pushpagiri Wildlife Sanctuary</h1>
          <p className='font-semibold pb-10'>(APPROXIMATE DISTANCE 64 km KMS FROM HAVALA PLANTATION STAY)</p>
          <p> Experience the rich biodiversity of the Pushpagiri Wildlife Sanctuary
with guided safaris. Encounter diverse flora and fauna, including various species of birds and animals.
          </p>
        </div>
      </div>

      {/* ---------THE LAST THING------ */}

      <div className='flex flex-col sm:flex-row items-center justify-around p-5 space-x-4 bg-gray-100'>
        <div className="sm:w-[35%] w-full">
          <h1 className='font-bold text-2xl'>VISIT OTHER PLACES</h1>
          <p> Sakleshpura offers some amazing viewpoints, mountains to trek, waterfalls to take a dip and ancient temples. Here you can witness breathtaking sunsets over the area's jungles, plantations and rivers. Other places include Kukke Subramanya, Dharmasthala, Belur, Halebidu – all within 2 hours of drive.
          </p>
        </div>
        <div className="sm:w-[40%] w-full">
          <img src={Attraction20} alt="Hadlu Waterfalls" className="mb-4 md:mb-0 h-[50vh] object-fill"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Attraction
