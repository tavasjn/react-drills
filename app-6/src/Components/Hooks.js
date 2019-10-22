import React, {useState} from 'react';

const Hooks = () => {

    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        list.push(newItem);
        setNewItem('')
    }

    console.log(list)

    return(
        <div>
            <div>
                MY TO-DO LIST:
            </div>
            <div>
                <input onChange={e => setNewItem(e.target.value)}/>
                <button onClick={addItem}>Add</button>
                <br />
                {list.map(e => (<div>{e}</div>))}
            </div>
        </div>
    )
}

export default Hooks;