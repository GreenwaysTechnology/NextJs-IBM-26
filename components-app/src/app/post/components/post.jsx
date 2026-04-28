'use client'
import { useState } from "react"

export default function Post() {
    const [posts, setPosts] = useState([{
        id: 1, title: 'React', body: 'This is React Post'
    },
    {
        id: 2, title: 'Angular', body: 'This is Angular Post'
    }
    ])

    //to hold form data 
    const [form, setForm] = useState({ title: '', body: '', id: null })
    //Edit or update status
    const [isEditing, setIsEditing] = useState(false)

    //listener
    const handleSubmit = (e) => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }
    const addPost = () => {
        const newPost = { id: posts.length + 1, title: form.title, body: form.body }
        setPosts([...posts, newPost])
        clearForm()
    }
    const updatePost = () => {
        console.log('updatePost')
        setPosts(posts.map(post => post.id === form.id ? form : post))
        setIsEditing(false)
        clearForm()
    }
    const clearForm = () => {
        setForm({ title: '', body: '', id: null })
    }

    const handleEdit = (post) => {
        setIsEditing(true)
        setForm({ title: post.title, body: post.body, id: post.id })
    }
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))
    }



    return <div>
        {/* Todo: remove this once the testing over */}
        <h1>{JSON.stringify(form)}</h1>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
                <input onChange={(e) => {
                    setForm({ ...form, title: e.target.value })
                }} value={form.title} placeholder="Title" />
            </div>
            <div style={{ marginBottom: 10 }}>
                <textarea onChange={(e) => {
                    setForm({ ...form, body: e.target.value })
                }} value={form.body} placeholder="Body"></textarea>
            </div>
            <div style={{ marginBottom: 10 }}>
                <button className="focus:outline-none text-white bg-green-700 
                hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-green-600 dark:hover:bg-green-700 
                dark:focus:ring-green-800">
                    {isEditing ? "Update" : "Add "}Post
                </button>
            </div>

        </form>
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button onClick={() => {
                            handleEdit(post)
                        }} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                        <button onClick={() => {
                            handleDelete(post.id)
                        }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

                    </li>
                })
            }
        </ul>

    </div>

}