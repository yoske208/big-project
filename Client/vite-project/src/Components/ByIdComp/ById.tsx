import React, { useState } from 'react'
import {byID} from "../fatchAPI"
import { TerrorModel } from '../../Interface/Interfaces';

interface Props {
  terrors: TerrorModel[];
}

const ById = ({terrors} : Props) => {
    const [data, setData] = useState({});
    const [id, setId] = useState('');
    const handleById = async () => {
        const result = await byID(id);
        setData(result);
    }

  return (
    <div>
        
        <h3>this is by id</h3>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={() => handleById()}>by id</button>
        <div className='dataCard'>
        <p>{JSON.stringify(data)}</p>

        </div>
        
    </div>
  )
}

export default ById