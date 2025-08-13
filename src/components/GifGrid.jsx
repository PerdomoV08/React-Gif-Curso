// @ts-nocheck
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";
import checkPropTypes from "prop-types/checkPropTypes";
import '@testing-library/jest-dom';

import GifItem from "./GifItem";

const GifGrid = ({category}) => {

    // Validación manual de PropTypes (necesaria en React 19 para componentes funcionales)
    checkPropTypes(GifGrid.propTypes, {category}, 'prop', 'GifGrid');

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            // title={image.title} // Otras formas de hacerlo
                            // url={image.url} // Otras formas de hacerlo
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.ropTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid
