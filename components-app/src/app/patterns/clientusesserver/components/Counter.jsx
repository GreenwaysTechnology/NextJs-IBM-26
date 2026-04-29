'use client'
import { useState } from "react"

// import CounterHeader from "@/app/patterns/clientusesserver/components/CounterHeader";

export function Counter(props) {
    const [counter, setCounter] = useState(0)
    return <div>
        {/* Server Component: Client Component uses another Component */}
        {/* <CounterHeader /> */}
        {props.children}
        <h1>Counter : {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
            console.log(counter)
        }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+</button>
    </div>
}