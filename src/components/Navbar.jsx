import { LiaSuitcaseSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { GiHelp } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div>
            <div className="w-full h-20 items-center flex">
                <h1 className="w-1/3 ">Logo</h1>
                <ul className="w-2/3  flex items-center justify-start text-xl text-gray-700 font-bold gap-16">
                    <li className="flex items-center gap-2"><LiaSuitcaseSolid />Uber Corporate</li>
                    <li className="flex items-center gap-2"><CiSearch />Search</li>
                    <li className="flex items-center gap-2"><BiSolidOffer />Offers</li>
                    <li className="flex items-center gap-2"><GiHelp />Help</li>
                    <li className="flex items-center gap-2"><FaUser />Sign In</li>
                    <li className="flex items-center gap-2"><FaCartShopping />Cart</li>
                    {/* <li>Sign Up</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;