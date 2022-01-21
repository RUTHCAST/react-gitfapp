import React, { useEffect, useState} from 'react';
import { UseFetchGifs } from '../hooks/UseFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = UseFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            { loading ? <p>Loading</p> : null}
            {
                <div className='card-grid'>
                    {            
                        images.map( img => { 
                            return <GifGridItem key={ img.id }  { ...img } />
                        })
                    }

                </div>
            }
        </>
    )
}

