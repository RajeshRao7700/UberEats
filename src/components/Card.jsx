import { FaShoppingBasket } from "react-icons/fa";

const RestaurantCard = ({ data }) => {
    return (
        // <div className="cursor-pointer">

        //     Image
        //     <div className="rounded-xl overflow-hidden"
        //         <img
        //             src={data.image}
        //             alt={data.restaurantName}
        //             className="w-full h-40 object-cover hover:scale-105 transition"
        //         />
        //     </div>


        //     <div className="mt-3">
        //         <h2 className="font-bold text-lg">{data.restaurantName}</h2>

        //         <div className="flex items-center gap-2 text-sm text-gray-600">
        //             <span className="bg-green-600 text-white px-1 rounded text-xs">
        //                 ⭐ {data.address}
        //             </span>
        //             <span>{data.time}</span>
        //         </div>

        //         <p className="text-gray-500 text-sm">{data.type}</p>
        //         <p className="text-gray-400 text-sm">{data.parkingLot}</p>
        //     </div>
        // </div>

        <div className="card border-gray-500 border-2 border-solid rounded-2xl hover:cursor-pointer hover:scale-105 transition hover:shadow-2xl">
            <div className="w-64 h-60 rounded-2xl  bg-red-100">
                <img src="/chicken.png" alt="" className="w-full h-full rounded-t-2xl" />
            </div>
            <div className="flex">
                <div className="p-2  ">
                    <h1 className="font-semibold">Whole Chicken</h1>
                    <p>₹ 200</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="flex items-center gap-2 w-20 justify-center h-8 ml-10 text-white rounded-full bg-red-800">Add<FaShoppingBasket /></button>
                </div>
            </div>

        </div>
    );
};

export default RestaurantCard;