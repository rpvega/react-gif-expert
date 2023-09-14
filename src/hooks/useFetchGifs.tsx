import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook es una funcion que retorna algo 
export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [category])

    return {
        images,
        isLoading
    }
}
