import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ src }) => <img src={src} alt='' />;

Thumbnail.propTypes = {
    src: PropTypes.string,
}

Thumbnail.defaultProps = {
    src: '',
}

export default Thumbnail;