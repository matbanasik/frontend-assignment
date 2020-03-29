import React from 'react';
import PropTypes from 'prop-types';


const SortButton = ({ onChange }) => {
    return (
        <div className="section column is-full is-half-mobile">
            <div className="level-right">
                <button type="button" className="button is-medium level-item" onClick={onChange}>
                    Sort by date&nbsp;&nbsp;
                    <i className="fa fa-sort" />
                </button>
            </div>
        </div>
    )
};

SortButton.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SortButton;