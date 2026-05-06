import knowbg from "/knowbg.jpeg";

const AboutUs = () => {
    return (
        <div>
            <div className="h-[calc(100vh-80px)] bg-cover bg-center" style={{ backgroundImage: `url(${knowbg})` }}></div>
            {/* <h1>About Us</h1> */}
        </div>
    )
}

export default AboutUs;