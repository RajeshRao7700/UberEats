import { LiaSuitcaseSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { GiHelp } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="w-full h-20 items-center flex">
                <Link to='/' className="w-1/5 ">Logo</Link>
                <ul className="w-4/5  flex items-center justify-end text-xl text-gray-700 font-bold gap-8">
                    <li className="flex items-center gap-2"><LiaSuitcaseSolid />Uber Corporate</li>

                    <li className="flex items-center gap-2"><CiSearch />Search</li>
                    <li className="flex items-center gap-2"><BiSolidOffer />Offers</li>
                    <Link to='/Aboutus' className="flex items-center gap-2"><GiHelp />About Us</Link>
                    <Link to='/Contactus' className="flex items-center gap-2"><FaPhone />Contact</Link>
                    <Link to='/Login' className="flex items-center gap-2"><FaUser />Sign In</Link>
                    <Link to='/Cart' className="flex items-center gap-2"><FaCartShopping />Cart</Link>
                    {/* <li>Sign Up</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;