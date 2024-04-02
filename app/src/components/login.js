import React, { useState } from 'react'
import PersonList from '../components/list'

const Login = ( onLogin ) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [Message, setMessage] = useState('')

    const people = [
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Davi' }
    ]

    const login = (e) => {
        e.preventDefault()

        if(username === 'davi' && password === '123'){
            setIsLoggedIn(true)
            setMessage('Sucess')
        } else{
            setIsLoggedIn(false)
            setMessage('Nome de usuário ou senha incorretos.')
        }
    }

    return(
        <div>
            {isLoggedIn ? (
                <div>
                    <PersonList people={people} />
                </div>
            ) : (
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder='Nome usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    <br />

                    <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br />

                    <button type="submit">Login</button>
                    {Message && <p>{Message}</p>}
                </form>
            )} 
        </div>
    )

}

export default Login