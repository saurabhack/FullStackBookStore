function Login(){
    return(
        <>
        <div className="h-[calc(100vh-120px)] border flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Please Login</h2>
                <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm  font-bold mb-2" htmlFor="email">Email</label>
                        <input type="email" name="email"  id="email" placeholder="Email Address" className="shadow appearance-none border rounded  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm  font-bold mb-2" htmlFor="password">Password</label>
                        <input type="password" name="password"  id="password" placeholder="Password" className="shadow appearance-none border rounded  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login