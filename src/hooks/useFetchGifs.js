import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false,
                    });
                }, 1500);
            })

    }, [category])

    return state;
}

// component did mount in react classes
// the second parameter "[]" is a list of dependencies
// if [] equal to one execution
// useEffect(() => {
//     getGifs(category)
//         // como el argumente del then es el mismo mandado en la función
//         // interna se usa shortand la función interna de manera directa.
//         // antes: then(imgs => setImages(imgs))
//         .then(setImages);
// }, [ category ]);

// ** LOS EFECTOS NO PUEDEN SER ASYNC PORQUE ESPERAN ALGO SÍNCRONO.
