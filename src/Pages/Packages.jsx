import React from "react";
import PackageCard from '../Components/PackageCard'
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdOutlineRestaurant } from "react-icons/md";
import { BsFillCupFill } from "react-icons/bs";
import { MdRiceBowl } from "react-icons/md";
import { BiSolidWine } from "react-icons/bi";
import { BsCake2Fill } from "react-icons/bs";
import { GiTwirlyFlower } from "react-icons/gi";
import { MdEmojiPeople } from "react-icons/md";



const Packages = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8">
        <PackageCard
          title="Every Day Packages"
          priceAdult={1200}
          priceChild={600}
          breakfastIcon={<MdOutlineFreeBreakfast/>}
          breakfast="Malnad style Roti chutney, Idli chutney or Dosa chutney"
        />
        <PackageCard
          title="All Inclusive/Min 5 Peoples"
          priceAdult={2500}
          priceChild={1250}
          cardStyle="orange"
          peopleIcon={<MdEmojiPeople />}
          people="MIN 5 person"
          breakfastIcon={<MdOutlineFreeBreakfast/>}
          breakfast="Malnad style Roti chutney, Idli chutney or Dosa chutney"
          lunchNonvegIcon={<MdLunchDining/>}
          lunchNonveg="Malnad style kadubu, shavige, chicken curry, chilli chicken, curd rice, coconut souple"
          lunchVegIcon={<MdOutlineRestaurant/>}
          lunchVeg="Malnad style kadubu, shavige, coconut milk, avare kaal saaru, curd rice, palya, coconut souple"
          eveningSnackIcon={<BsFillCupFill/>}
          eveningSnack="coffee/tea with biscuits"
          dinnerNonvegIcon={<MdRiceBowl/>}
          dinnerNonveg="Chicken Briyani, Kabab, Salad, Curd rice, gulab jamun, 100 ml wine per person"
          dinnervegIcon={<BiSolidWine/>}
          dinnerVeg="Veg biriyani, paneer manchuri, salad, curd rice, gulab jamun, 100 ml wine per person"
         
        />
        <PackageCard
          title="Birthday/Anniversary Packages/Min 5 Peoples"
          priceAdult={2500}
          priceChild={1250}
          peopleIcon={<MdEmojiPeople />}
          people="MIN 5 person"
          breakfastIcon={<MdOutlineFreeBreakfast/>}
          breakfast="Malnad style Roti chutney, Idli chutney or Dosa chutney"
          lunchNonvegIcon={<MdLunchDining/>}
          lunchNonveg="Malnad style kadubu, shavige, chicken curry, chilli chicken, curd rice, coconut souple"
          lunchVegIcon={<MdOutlineRestaurant/>}
          lunchVeg="Malnad style kadubu, shavige, coconut milk, avare kaal saaru, curd rice, palya, coconut souple"
          eveningSnackIcon={<BsFillCupFill/>}
          eveningSnack="coffee/tea with biscuits"
          dinnerNonvegIcon={<MdRiceBowl/>}
          dinnerNonveg="Chicken Briyani, Kabab, Salad, Curd rice, gulab jamun, 100 ml wine per person"
          dinnervegIcon={<BiSolidWine/>}
          dinnerVeg="Veg biriyani, paneer manchuri, salad, curd rice, gulab jamun, 100 ml wine per person"
          cakeFlavorsIcon={<BsCake2Fill/>}
          cakeFlavors={["Butterscotch", "Blackcurrant", "Chocolate"]}
          decorationsIcon={<GiTwirlyFlower/>}
          decorations={["Balloon", "Banners"]}
        />
      </div>
    </div>
  );
};

export default Packages;
