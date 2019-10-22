import React, { useState } from 'react';

const Hooks = () => {

    const [foods, setFoods] = useState([
        "ravioli",
        "mint ice cream",
        "sushi",
        "lettuce",
        "pizza"
    ])

    const [filterString, setFilterString] = useState('');

    return (
        <div>
            <input onChange={(e) => setFilterString(e.target.value)} />
            <br />
            {foods.filter(e => e.includes(filterString)).map(e => <div>{e}</div>)}
        </div>
    )
}

export default Hooks;