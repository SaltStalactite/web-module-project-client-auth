import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setFriends(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <div>
                <h2>Friends</h2>
                {
                    friends.map(friend => {
                        return <div key={friend.id}>
                            <p>{friend.name}</p>
                            <p>age: {friend.age}</p>
                            <p>contact: {friend.email}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default FriendsList