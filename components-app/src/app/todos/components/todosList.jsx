// import todos from "../../mock-data/todos"; //relative path syntax
import todos from "@/app/mock-data/todos" //import aliases syntax


export default function TodoList() {
    return <section>
        <h1>TodoList</h1>
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>{todo.title}</li>
            })}
        </ul>
    </section>
}