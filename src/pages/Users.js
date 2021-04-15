import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {users.map(user => (
                <p key={user.id}>{ user.email }</p>
            ))}
        </div>
    )
}