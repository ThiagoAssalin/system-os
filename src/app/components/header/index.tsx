import Link from "next/link";


export default function Header(){
    return(
        <header className="  h-16 flex items-center justify-between p-4 border-b-2">
            <h1>OsSystem</h1>
            <nav className="flex gap-2">
                <Link className=" cursor-pointer" href={'/'}>DashBoard</Link>
                <Link className=" cursor-pointer" href={'../login'}>Login</Link>
            </nav>
        </header>
    )
}