
export const getGifs = async ( categoria ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=vZNEp8dhcwgQo0breI4CW6VmrSjMZoV7`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( res =>{
        return {
            id: res.id,
            title: res.title,
            url: res.images.downsized_medium.url
        }
    } )
    
    return gifs;
}