export default function LoginContainer(){
    return(
        <div>
            <form className="flex flex-col justify-center items-center gap-9 rounded-md w-60 h-72 bg-gradient-to-r from-cyan-500 to-blue-500">
                <input type="text" placeholder="Login" className="border border-sky-500 rounded-md p-1" ></input>
                <input type="text" placeholder="Password" className="border border-sky-500 rounded-md p-1"></input>
                <input type="submit" className="border rounded-md text-white bg-cyan-700 p-1" ></input>
            </form>      
        </div>
    )
}