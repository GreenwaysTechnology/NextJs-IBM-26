
export default function Home() {
    return <div className="m-40">
        <h1>{process.env.MESSAGE}</h1>
        <h1>From .env.local {process.env.MYVARLOCAL}</h1>
        <h1>From .env.dev {process.env.MYDEVVARIABLE}</h1>
        <h1>From .env.prod {process.env.MYPRODVARIABLE}</h1>
        <h1>URL {process.env.URL}</h1>
    </div>
}
