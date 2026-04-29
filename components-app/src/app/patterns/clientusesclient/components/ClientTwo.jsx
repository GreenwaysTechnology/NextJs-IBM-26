
// 'use client'

import { useState } from "react"

export default function ClientTwoComponent() {
    const [value, setValue] = useState(100)
    return <>
        <h1>Client Two : {value}</h1>
    </>

}
