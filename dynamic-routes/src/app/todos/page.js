import Link from "next/link"
import TODOS from "../mock-data/todos"

export async function fetchTodos(){
    return TODOS
}

export default async function TodosPage(){
    const todos = await  fetchTodos()
    return <div>
            {/* Build Master details */}
            <ul>
                {todos.map(todo=>{
                    return <li key={todo.id}>
                        <Link href={{pathname:`/todos/${todo.id}`}}>{todo.title}</Link>
                    </li>
                })}
            </ul>
    </div>
}