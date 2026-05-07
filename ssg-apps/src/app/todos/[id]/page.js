export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export async function fetchTodos() {
    try {
        const url = `https://jsonplaceholder.typicode.com/todos`
        const response = await fetch(url)
        return response.json()
    }
    catch (err) {
        //log
    }
}



export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}
//override function which is called during build time in order to prepare the pages

export async function generateStaticParams() {
    const todos = await fetchTodos();

    return todos.map(todo => {
        const id = todo.id.toString()
        return {
            id: id  //1.html, 2.html.....200.html
        }
    })
}