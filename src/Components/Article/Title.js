import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => <h3 className="title is-3">{children}</h3>;

Title.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Title.defaultProps = {
    children: null,
}

export default Title;