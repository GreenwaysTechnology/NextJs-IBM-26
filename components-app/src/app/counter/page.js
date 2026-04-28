import { Counter } from "@/app/counter/components/counter"

export default function CounterPage(){
    console.log("Rendering at Server")
    return <>
        <h1>Counter Page</h1>
        <Counter/>
    </>
}