import Link from "next/link";


export default function Header(){
    return(
        <header className=" w-screen h-16 flex items-center justify-between p-4 border-b-2">
            <h1>OsSystem</h1>
            <nav className="flex gap-2">
                <Link href={''}>DashBoard</Link>
                <Link href={''}>Login</Link>
            </nav>
        </header>
    )
}