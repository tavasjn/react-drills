import React, { useState } from 'react';

const Hooks = () => {

    const [login, setLogin] = useState({username: '', password: ''});
    

    const addUsername = () => {
        alert(`Username: ${login.username} Password: ${login.password}`)
    }
    console.log(login)

    return (
        <div>
            <input onChange={(e) => setLogin({username: e.target.value, password: login.password})}/>
            <input onChange={(e) => setLogin({username: login.username, password: e.target.value})}/>
            <button onClick={addUsername}>login</button>
        </div>
    )
}

export default Hooks;