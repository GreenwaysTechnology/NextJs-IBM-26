'use client'

import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(+process.env.NEXT_PUBLIC_SEED_VALUE)

    return <div>
        <h1>Counter {value}</h1>
        <button onClick={() => {
            setValue(value + 1)
        }}>+</button>
    </div>
}