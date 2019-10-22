import React, { useState } from 'react';

const Hooks = () => {

    const [dinner, setDinner] = useState([
        'pizza',
        'salad',
        'Dr.pepper',
        'pineapple'
    ])
    console.log(dinner)
    return (

        <div>
            {dinner.map((e, i) => <div>{e}</div>)}
        </div>
    )

}

export default Hooks;