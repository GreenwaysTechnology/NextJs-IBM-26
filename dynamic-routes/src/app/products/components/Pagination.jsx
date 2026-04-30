'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Mock data array simulating products
const allProducts = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
    'Product 9',
    'Product 10',
]
//items per page
const pageSize = 3

export default function Pagination() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const initalPage = Number(searchParams.get('page')) || 1

    //track page
    const [page, setPage] = useState(initalPage)

    const changePage = newPage => {
        //Ensure that page is within total Page count bounds
        if (newPage < 1 || newPage > Math.ceil(allProducts.length / pageSize)) {
            return
        }
        setPage(newPage)
        //change the browser url 
        router.push(`/products?page=${newPage}`, undefined, { shallow: true })
    }

    //componentDidMount
    useEffect(() => {
        const currentPage = Number(searchParams.get('page')) || 1
        if (currentPage) {
            router.replace('/products?page=1', undefined, { shallow: true })
            return
        }
        const pageNumber = Number(currentPage)

        if (pageNumber !== page) {
            setPage(pageNumber)
        }
    }, [])

    //componentDidUpdate
    useEffect(() => {
        const currentPage = Number(searchParams.get('page')) || 1
        if (currentPage !== page) {
            setPage(currentPage)
        }
    }, [searchParams])


    //calculate the slice of products for the current page
    const pagedProducts = allProducts.slice((page - 1) * pageSize, page * pageSize)
    return <div>
        <h1>Product List</h1>
        <ul>
            {
                pagedProducts.map((product, index) => {
                    return <li key={index}>{product}</li>
                })
            }
            <button onClick={() => changePage(page - 1)} disabled={page <= 1} >Previous</button>
            <button onClick={() => changePage(page + 1)} disabled={page >= Math.ceil(allProducts.length / pageSize)}>Next</button>
            {/* Display the 1/3 */}
            <p>Page {page} of {Math.ceil(allProducts.length / pageSize)}</p>
        </ul>
    </div>

}