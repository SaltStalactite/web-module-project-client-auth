import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
    username: '',
    password: ''
}



const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { push } = useHistory()

    const onChange = event => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                push('/friends')
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>Username&nbsp;
                    <input
                        id='username'
                        name='username'
                        value={formValues.username}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='password'>&nbsp;Password&nbsp;
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login