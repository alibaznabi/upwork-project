import { Logo } from "../assets";
import { BsInstagram } from "react-icons/bs";
import { LuYoutube } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";

function Footer(){
    const data=[
        {   
            img: Logo
        }
    ]
return(
    <footer className="text-black bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:mt-3">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-center md:items-start">
                <div className="mb-4 w-full sm:w-auto">
                    <img src={Logo} alt="Company Logo" className="mx-auto md:mx-0 w-[50%] lg:ml-10 mt-6" />
                </div>
                <div className="flex flex-wrap justify-center gap-4 lg:ml-20 pt-10">
                    <a href="#" className="text-xl">
                        <BsInstagram className="text-red-500" />
                    </a>
                    <a href="#" className="text-xl">
                        <RiFacebookCircleLine className="text-blue-700" />
                    </a>
                    <a href="#" className="text-xl">
                        <LuYoutube className="text-red-900" />
                    </a>
                    <a href="#" className="text-xl">
                        <TbBrandTwitter className="text-blue-800" />
                    </a>
                </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col space-y-4 lg:w-[60%]">
                <h3 className="text-lg font-semibold">ADDRESS</h3>
                <p>Ballupet - Magge Rd, Jinagaravalli, Hosagadde, Karnataka  573214</p>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>Info@havalaplantationstay.com</p>
                <h3 className="text-lg font-semibold">PHONE NO</h3>
                <p>+918792616548</p>
            </div>

            {/* Map */}
            <div className="flex flex-col items-center lg:w-[80%]">
                <h3 className="text-lg font-semibold">Location</h3>
                <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.2963674650397!2d-122.08481358489833!3d37.4219997798203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858083b675b1b7%3A0x9ff7b34e86e8fcf5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1638866477423!5m2!1sen!2sus" width="300" height="200" style={{ border:  0 }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
</footer>
)
}

export default Footer;