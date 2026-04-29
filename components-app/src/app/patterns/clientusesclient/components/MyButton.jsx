'use client'

//Bridge Component
import { Button } from "@carbon/react"

export default function MyButton() {

    return <div>
        <h1>React Carbon Lib</h1>
        <Button onClick={()=>{
            alert('React Carbon button is clicked')
        }}>Hello</Button>
    </div>

}
