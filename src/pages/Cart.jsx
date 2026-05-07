const Cart = () => {
    return (
        <div>
            <div className="flex p-5 w-4/5 h-3/5 bg-orange-100">
                {/* <h1>Hello</h1> */}
                <div className="flex flex-col w-2/3 h-full  ">
                    <div className="flex w-full gap-6 justify-center items-center">
                        <img className="rounded-2xl w-28 h-24" src="./cartimg.png" alt="" />
                        <div className="flex flex-col w-96 h-full ">
                            <h1 className="font-semibold text-xl">
                                Boneless Butter Chicken</h1>
                            <p className="text-gray-700 text-md">Quantity: Quarter (500ml -3 Pcs) Sweetness level: Less Sweet</p>
                            <p className="text-gray-700 text-md">$250.00</p>


                        </div>
                        <button className="flex justify-center items-center text-md text-white font-semibold w-24 rounded-2xl h-4 p-3 bg-red-800">1</button>
                        <h1 className="text-xl font-semibold">$250</h1>
                    </div>
                </div>

                <div className="w-1/3 h-full bg-green-100">hello3</div>
            </div>
        </div>
    )
}

export default Cart;