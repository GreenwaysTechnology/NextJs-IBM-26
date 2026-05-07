import { notFound } from "next/navigation"

//page data
const docs = {
    //path: path content
    "getting-started": "Heres How to get started",
    "advanced": "This is advanced content"
}

export default async function DocsDetailsPage({ params }) {
    const slug = (await params).slug
    const path = slug.join("/")
    const content = docs[path]
    if (!content) {
        //show 404 page
        notFound()
    }
    return <div className="p-6">
        <h1>Docs Path : {path}</h1>
        <p>{content}</p>
    </div>
}