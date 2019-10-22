import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Hooks = () => {

    const [api, setApi] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/1')
        .then(res => setApi(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(api)
    return(
        <div>
            <div>Name: {api.name}</div>
            <div>Birth Year: {api.birth_year}</div>
            <div>Height: {api.height}</div>
            <div>Eye Color: {api.eye_color}</div>
        </div>
    )
}

export default Hooks;