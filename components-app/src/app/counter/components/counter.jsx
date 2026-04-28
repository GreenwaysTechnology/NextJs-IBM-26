'use client' //directive (some instruction for compiler)

import { useState } from "react";

export function Counter() {
    const [value, setValue] = useState(0)

    return <div>
        <h1>Counter Value : {value}</h1>
        <button onClick={() => {
            console.log("Client side rendering ", value)
            setValue(value + 1)
        }}>+</button>
    </div>
}