import React from 'react';
import PropTypes from 'prop-types';

const Preamble = ({ children }) => <p>{children}</p>;

Preamble.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Preamble.defaultProps = {
    children: null,
}

export default Preamble;