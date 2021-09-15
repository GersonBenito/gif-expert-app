import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{

        const getData = async() =>{

            const data = await getGifs( categoria );

            setState({
                data: data,
                loading: false
            });
            
        }

        getData();

    },[categoria])


    return state;

}