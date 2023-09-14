import { GifItem } from "./GifItem";
import { IImage } from "../interfaces/GifInterface";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }: { category: string }) => {


    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3> {category}</h3>
            {/* <LoadingMessage isLoading/> componente que podriamos implementar*/}

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {!isLoading &&
                    images.map((image: IImage) =>
                        <GifItem
                            key={image.id}
                            {...image} />
                    )
                }
            </div>
        </>
    )
}

// GifGrid.propTypes = {
//     category: PropTypes.string.isRequired
// }
