import knowbg from "/knowbg.jpeg";
import { IoIosPeople } from "react-icons/io";
import { GiStairsGoal } from "react-icons/gi";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { SiLibreofficeimpress } from "react-icons/si";

const AboutUs = () => {
    return (
        <div>
            <div className="flex justify-end h-[calc(100vh-80px)] bg-cover bg-center " style={{ backgroundImage: `url(${knowbg})` }}>
                <div className="flex flex-col w-2/3 h-[calc(100vh-80px)] ">
                <div className="flex justify-center items-center h-1/2 w-full">
                <div className="w-84 ">
                    <h1 className=" border- border-white text-5xl font-bold text-white">Get to Know Us</h1>
                    </div>

                </div>
                <div className="flex text-white gap-8">
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <IoIosPeople className="text-6xl"/>
                        <h1 className="text-2xl font-semibold">LEADERSHIP</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro pariatur sint debitis. Rerum et reiciendis facere enim quod dolorum tempore!</p>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <GiStairsGoal className="text-6xl"/>
                        <h1 className="text-2xl font-semibold "> CAREERS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius similique consequatur fuga quidem. Sit itaque quam rerum ratione laudantium.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <FaPersonWalkingArrowLoopLeft className="text-6xl"/>
                        <h1 className="text-2xl font-semibold">PARTNERSHIP</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis modi consequatur ullam vel maxime ex pariatur voluptas incidunt voluptatibus?</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <SiLibreofficeimpress className="text-6xl"/>
                        <h1 className="text-2xl font-semibold">PRESS</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis unde quisquam molestiae, cum magni doloribus veritatis repellat labore saepe.</p>
                    </div>
                </div>
                </div>
            </div>

            {/* <h1>About Us</h1> */}
        </div>
    )
}

export default AboutUs;