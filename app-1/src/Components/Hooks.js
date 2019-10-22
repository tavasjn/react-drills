import React, {useState} from 'react';


const Hooks = () => {
  const [name, setName] = useState('');


  return(
    <div>
        {name}
        <br />
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  )
}

export default Hooks;