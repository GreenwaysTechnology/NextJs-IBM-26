
async function getUsers() {
    const users = await fetch('http://localhost:3000/api/users')
    return await users.json()
}


export default async function UserPage() {
    const users = await getUsers()
    return <div className="m-40">
        <ul>
            {users.map(user => {
                return <li key={user.id}>{
                    <>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                    </>
                }</li>
            })}
        </ul>
    </div>
}