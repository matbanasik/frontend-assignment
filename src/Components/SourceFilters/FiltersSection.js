import React from 'react';
import PropTypes from 'prop-types';

const FiltersSection = ({ children }) => (
    <section className="section columns is-multiline">
        <h5 className="title column is-full is-marginless">Data sources</h5>
        <div className="column is-full">
            {children}
        </div>
    </section>
)

FiltersSection.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

FiltersSection.defaultProps = {
    children: null,
}

export default FiltersSection;