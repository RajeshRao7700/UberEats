const RestaurantCard = ({ data }) => {
    return (
        // <div className="cursor-pointer">

        //     Image
        //     <div className="rounded-xl overflow-hidden">
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

        <div className="card ">
            <div className="w-64 h-48 rounded-2xl bg-red-100"></div>

        </div>
    );
};

export default RestaurantCard;