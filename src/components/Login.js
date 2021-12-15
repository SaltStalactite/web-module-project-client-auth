import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
    username: '',
    password: ''
}



const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        <>
            <form>
                <label htmlFor='username'>Username&nbsp;
                    <input
                        id='username'
                        name='username'
                    />
                </label>
                <label htmlFor='password'>&nbsp;Password&nbsp;
                    <input
                        id='password'
                        name='password'
                        type='password'
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}