'use client'

import { useRouter } from "next/navigation"

export function DashboardNavigator() {
    const router = useRouter()

    return <div>
        <h1>Dashboard Navigator</h1>
        <button onClick={() => {
            router.push('/services')
        }}>Services</button>
        <button onClick={() => {
            router.push('/contact')
        }}>Contact</button>
    </div>
}