'use client'

import useSWR from "swr"

async function fetchPosts(...args) {
    const res = await fetch(...args)
    return await res.json()
}

export default function FetchPostsUsingSWR() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetchPosts)

    if (error) {
        return <h1>Failed to return</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return <ul>
        {
            data.map(post => {
                return <li key={post.id}>
                    {post.title}
                </li>
            })
        }
    </ul>

}