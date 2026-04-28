// import TodoList from "./components/todosList"; //relative path
import TodoList from "@/app/todos/components/todosList" //import aliases

export default function TodosPage() {
    return <>
        <h1>Todos Page</h1>
        <TodoList />
    </>
}