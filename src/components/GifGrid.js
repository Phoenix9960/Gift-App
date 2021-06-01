import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
// import { getGift } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFetchGifts(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>cargando...</p>}
            <div className='card-Grid'>
                {
                    images.map( img => {
                        return <GifGridItem 
                        key={img.id}
                        {...img} 
                        />
                    })
                }
            </div>
        </>
    )
}
