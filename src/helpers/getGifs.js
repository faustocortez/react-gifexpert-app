

// Al ser async lo que retorna es una promesa que resuelve la
// colección de las imágenes.
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LorHcp1hTRLEIFFnzCsCcrXK0nOAS0Ux&q=${ encodeURI(category) }&limit=10`;
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

    return gifs;
}