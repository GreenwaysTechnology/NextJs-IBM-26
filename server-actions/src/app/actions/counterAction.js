'use server'

let count = 0
export async function increment() {
    console.log('Running in server')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count++)
        }, 1000)
    })
}