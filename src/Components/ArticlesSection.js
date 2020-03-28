import React from 'react';
import PropTypes from 'prop-types';

const ArticlesSection = ({ children }) => (
    <section className="section columns is-multiline bd-main-container container">
        {children}
    </section>
)

ArticlesSection.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

ArticlesSection.defaultProps = {
    children: null,
}

export default ArticlesSection;