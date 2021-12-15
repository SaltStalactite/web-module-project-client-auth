import React, { useState } from 'react'
import axios from 'axios'

const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const changeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <h2>Add Friend</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>Name:&nbsp;
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={changeHandler}
                    />
                </label>
                <label>Age:&nbsp;
                    <input
                        type='text'
                        id='age'
                        name='age'
                        onChange={changeHandler}
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                        type='text'
                        id='email'
                        name='email'
                        onChange={changeHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddFriend