import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    // component did mount in react classes
    // the second parameter "[]" is a list of dependencies
    // if [] equal to one execution
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=LorHcp1hTRLEIFFnzCsCcrXK0nOAS0Ux&q=Rick+and+Morty&limit=10';
        const response = await fetch( url );
        const { data } = await response.json();

        const gifs = data.map(img => {
            const {
                id,
                title,
                images: { downsized_medium: { url} },
            } = img;
            return  {
                id,
                title,
                url
            }
        })

        setImages(gifs);
    }

    return (
        <div>
            <h3>{ category }</h3>

        </div>
    )
}
