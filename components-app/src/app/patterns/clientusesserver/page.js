import { Counter } from "@/app/patterns/clientusesserver/components/Counter";
import CounterHeader from "@/app/patterns/clientusesserver/components/CounterHeader";


export default function ServerPage() {
    return <>
        {/* <Counter /> */}
        <Counter>
            {/* pass server component as prop */}
            <CounterHeader/>
        </Counter>
    </>
}