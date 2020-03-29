import React from 'react';
import PropTypes from 'prop-types';

const MainContentContainer = ({ children }) => (
    <main className="container">
        <div className="bd-main-container media columns is-multiline">
            {children}
        </div>
    </main>
);

MainContentContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

MainContentContainer.defaultProps = {
    children: null,
};

export default MainContentContainer;