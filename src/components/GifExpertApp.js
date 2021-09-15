import React, { useState } from 'react'
import AddCategoria from './categoria/AddCategoria';
import GifGrid from './GifGrid';


const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState(['One Punch']);

    return (
        <>
            <h1 className='text-info ml-3 mt-3' >GifExpertApp</h1>
            
            <AddCategoria  setCategoria={setCategorias} />
                {
                    categorias && categorias.map(cat =>(
                        <GifGrid key={cat} categoria={cat}  />
                    ))
                }
        </>
    )
}

export default GifExpertApp
