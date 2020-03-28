import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ src }) => (
    <figure className="image is-square">
        <img src={src} alt="" />
    </figure>
)

Thumbnail.propTypes = {
    src: PropTypes.string,
}

Thumbnail.defaultProps = {
    src: '',
}

export default Thumbnail;