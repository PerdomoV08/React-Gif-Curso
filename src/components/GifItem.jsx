import PropTypes from 'prop-types';
import checkPropTypes from 'prop-types/checkPropTypes';
import '@testing-library/jest-dom';

const GifItem = (props) => {
    // Validación manual de PropTypes (necesaria en React 19 para componentes funcionales)
    checkPropTypes(GifItem.propTypes, props, 'prop', 'GifItem');

    const { title, url, id } = props;

    return (
        <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        </div>
    );
};

// Definición de PropTypes
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string
};

export default GifItem
