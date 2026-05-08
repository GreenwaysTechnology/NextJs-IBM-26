import React from "react"


const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

const Hello = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 12000, import('../components/hello'))
    })
})
const Hai = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/hai'))
    })
})
const Header = () => {
    return <h1>Dashboard Header</h1>
}
const Footer = () => {
    return <h1>Dashboard Footer </h1>
}

export default function Dashboard() {
    return <div>
        {/* This is static component  */}
        <Header />
        {/* This is dynamic or delayed or lazy component */}
        <React.Suspense fallback={<h1>Welcome UI is loading....</h1>}>
            <Welcome />
        </React.Suspense>
        <React.Suspense fallback={<h1>Hello UI is loading....</h1>}>
            <Hello />
        </React.Suspense>
        <React.Suspense fallback={<h1>Hai UI is loading....</h1>}>
            <Hai />
        </React.Suspense>
        {/* This is static component */}
        <Footer />
    </div>
}