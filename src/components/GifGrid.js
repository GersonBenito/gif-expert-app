import React from 'react'
import styled from 'styled-components';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {

    const { data, loading } = useFetchGifs(categoria);

    return (
        <Container>
            <div color='red' className="titulo mt-3 animate__animated animate__zoomInUp">
                <h2 className='text-info' >{categoria}</h2>
            </div>

            {
                loading && (
                    <div className="contenedor">
                        <div className="spinner-grow text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
            <div className="contenido">
                {
                    data && data.map( (item) =>(
                        <GifGridItem key={item.id} {...item} />
                    ))
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    .titulo{
        display: flex;
        justify-content: center;
    }
    .contenido{
        display: grid;
        grid-template-columns: repeat(auto-fit, 18rem);
        justify-content: center;
        grid-gap: 25px;
    }

    .contenedor{
        display: flex;
        justify-content: center;

        .spinner-grow{
            width: 5rem;
            height: 5rem;
        }
    }
`;

export default GifGrid
