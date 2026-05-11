//route segment options 

export async function getTime() {
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //enable cache in the fetch second arg
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()
    return data
}
export async function generateStaticParams() {
    return [{
        city: 'Kolkata'
    }]
}


export default async function TimeCache() {
    const data = await getTime()
    return <div>
        <h1 className="font-bold">Time Now : {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}