const ContactUs = () => {
    return (
        <div className="w-full h-[calc(100vh-80px)] bg-[#ffffff] flex">
            <div className="w-1/2 h-full pl-96 pt-20 ">
                <img src="/bgmain1.png" className="h-[400px] w-[700px]" alt="" /></div>
            <div className="w-1/2 h-full ">
                <div className="flex d-flex justify-center flex-col rounded-lg p-4 gap-8 mt-16 ml-12 w-2/3 bg-[#2c2f30] border-2 border-solid border-white ">
                    <h1 className="text-gray-100 text-3xl font-semibold">Contact Us</h1>
                    <input type="text" className="bg-[#2c2f30] placeholder:text-gray-300 text-gray-100 border-b border-solid border-white p-2 " placeholder="Your Name" />
                    <input type="text" className="bg-[#2c2f30] placeholder:text-gray-300 text-gray-100 border-b border-solid border-white p-2 " placeholder="Phone Number" />
                    <input type="email" className="bg-[#2c2f30] placeholder:text-gray-300 text-gray-100 border-b border-solid border-white p-2 " placeholder="Email Address" />
                    <input type="text" className="bg-[#2c2f30] placeholder:text-gray-300 text-gray-100 border-b border-solid border-white p-2 " placeholder="Your Message" />
                    <button className="bg-red-800 text-white font-semibold px-2 py-3 rounded-full">Send Message</button>
                </div>

            </div>

        </div>
    )
}

export default ContactUs;