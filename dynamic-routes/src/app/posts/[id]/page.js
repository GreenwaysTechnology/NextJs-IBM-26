
export async function fetchPostsById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}

export default async function PostsDetailsPage(props) {
    const id = (await props.params).id
    const post = await fetchPostsById(+id)
    console.log(post)
    return <div>
        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
    </div>
}