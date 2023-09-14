import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook es una funcion que retorna algo 
export const UseFetchGifs = (category: string) => {

    const [images, setImages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async (): Promise<any> => {
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


UseFetchGifs.propTypes = {
    category: PropTypes.string.isRequired
}
