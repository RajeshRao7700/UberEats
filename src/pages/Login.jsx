const Login = () =>{
    return(
        <div className="flex justify-center items-center w-full h-screen bg-yellow-50">
            <div className="flex flex-col justify-center items-center gap-6 w-96 h-1/2 bg- rounded-lg bg-yellow-100">
            <h1>Login</h1>
            <h1 className="text-xl font-bold">Login</h1>
            <h1 className="text-sm">Login if you are a returning customer.</h1>
            <input type="email" placeholder="Email Address" className="w-3/4 h-9 p-4 rounded-md" />
            <input type="password" placeholder="Enter Password" className="w-3/4 h-9 p-4 rounded-md" />
            <button className="w-3/4 h-9 rounded-md bg-red-800 text-white ">Login</button>

            </div>
        </div>

    )
}

export default Login;