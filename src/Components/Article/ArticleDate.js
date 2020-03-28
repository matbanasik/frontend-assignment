import React from 'react';
import PropTypes from 'prop-types';

const ArticleDate = ({ children }) => <p>{children}</p>;

ArticleDate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

ArticleDate.defaultProps = {
    children: null,
}

export default ArticleDate;