const Login = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-[#fbf7f2]">
            <div className="flex flex-col justify-center items-center gap-6 w-[400px] h-2/3 rounded-2xl bg-[#ffffff]">
                <h1>Login</h1>
                <h1 className="text-xl font-bold">Login</h1>
                <h1 className="text-sm">Login if you are a returning customer.</h1>
                <input type="email" placeholder="Email Address" className="w-3/4 h-9 p-6 pl-4 rounded-md border-2 border-solid border-[#f4ede3]" />
                <input type="password" placeholder="Enter Password" className="w-3/4 h-9 p-6 pl-4 rounded-md border-2 border-solid border-[#f4ede3]" />
                <button className="w-3/4 h-9 rounded-md bg-red-800 text-white ">Login</button>

            </div>
        </div>

    )
}

export default Login;