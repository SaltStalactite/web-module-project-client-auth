import React from 'react'

const AddFriend = () => {

    return (
        <>
            <h2>Add Friend</h2>
            <form>
                <label>Name:&nbsp;
                    <input
                        type='text'
                        id='name'
                        name='name'
                    />
                </label>
                <label>Age:&nbsp;
                    <input
                        type='text'
                        id='age'
                        name='age'
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                        type='text'
                        id='email'
                        name='email'
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddFriend