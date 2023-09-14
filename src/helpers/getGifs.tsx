
export const getGifs = async (category: string) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=m9VUIEYJCx6zpDfPWUK5as473k5v5Jfi&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

}