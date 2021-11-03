import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    // component did mount in react classes
    // the second parameter "[]" is a list of dependencies
    // if [] equal to one execution
    useEffect(() => {
        getGifs(category)
            // como el argumente del then es el mismo mandado en la función
            // interna se usa shortand la función interna de manera directa.
            // antes: then(imgs => setImages(imgs))
            .then(setImages);
    }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { 
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
