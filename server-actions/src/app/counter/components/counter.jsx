'use client'
import { useState, useTransition } from "react"

import { increment } from "@/app/actions/counterAction"

export default function Counter({ initalCount = 0 }) {
    const [isPending, startTransition] = useTransition()
    const [count, setCount] = useState(initalCount)

    const handleIncrement = () => {
        startTransition(async () => {
            const value = await increment()
            setCount(value)
        })
    }
    return <div>
        <h1>{isPending ? 'Updating...' : `count:${count}`}</h1>
        <button disabled={isPending} onClick={() => {
            console.log('counter client')
            handleIncrement()
        }}>+</button>
    </div>
}