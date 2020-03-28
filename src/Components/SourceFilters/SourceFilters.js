import React from 'react';
import PropTypes from 'prop-types';
import CheckboxFilter from './CheckboxFilter';
import FiltersSection from './FiltersSection';

const SourceFilters = () => {
    return (
        <FiltersSection>
            <CheckboxFilter label="Sports" id="sports" checked={false} />
            <CheckboxFilter label="Fashion" id="fasion" checked={false} />
        </FiltersSection>
    )
};

export default SourceFilters;