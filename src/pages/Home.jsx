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