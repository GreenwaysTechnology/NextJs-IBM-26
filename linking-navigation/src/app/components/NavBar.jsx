'use client'

import Link from "next/link";
import '@/app/links.css'
import { usePathname } from "next/navigation";

export default function MenuBar() {

    const pathname = usePathname()
    // console.log(pathname)

    return <header>
        <h1>Header</h1>
        <nav>
            <ul>
                <li>
                    {/* Nav link */}
                    <Link className={`${pathname === '/' ? 'active' : ''}`} href={{ pathname: "/" }}>Home</Link>
                </li>
                <li>
                    {/* Nav link */}
                    <Link className={`${pathname === '/contact' ? 'active' : ''}`} href={{ pathname: "/contact" }}>Contact</Link>
                </li>

                <li>
                    {/* Nav link */}
                    <Link className={`${pathname === '/services' ? 'active' : ''}`} href={{ pathname: "/services" }}>Services</Link>
                </li>
                <li>
                    <Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: '/dashboard' }}>DashBoard</Link>
                </li>

            </ul>
        </nav>
    </header>
}