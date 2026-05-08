import { useEffect, useState } from "react";
import RestaurantCard from "../components/Card";
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        axios.get("")
            .then((res) => {
                setRestaurants(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <div>

            <div className="relative h-screen w-full overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 h-full w-full object-cover"
                >
                    <source src="/homebg.mp4" type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-4">

                    <h1 className="text-5xl md:text-7xl font-bold">
                        Delicious Food Delivered Fast
                    </h1>

                    <p className="mt-4 text-lg md:text-2xl">
                        Fresh meals from your favorite restaurants
                    </p>

                    <button className="mt-6 rounded-full bg-red-500 px-6 py-3 text-lg font-semibold hover:bg-red-600 transition">
                        Order Now
                    </button>

                </div>
            </div>
            <div className="flex d-flex justify-center">
                <div className=" w-3/4 justify-center h-full bg-gray-200">
                    <h1>Restaurants with online food delivery</h1>
                    <div className="flex d-flex flex-wrap gap-4 justify-center">
                        {/* {restaurants.map((item) => {
                        <RestaurantCard key={item.id} data={item} />
                    })} */}
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        {/* <RestaurantCard />
                    <RestaurantCard /> */}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;