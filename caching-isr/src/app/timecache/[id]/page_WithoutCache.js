export async function getTime() {
    const url ='https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //default fetch behaviour is no cache is enabled. 
    //Here we control only data cache.
    const response =  await fetch(url)
    const data = await response.json()
    return data 
}

export default async function TimeCache(){
    const data = await getTime()
    return <div>
         <h1 className="font-bold">Time Now : {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}