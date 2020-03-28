import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Preamble from './Preamble';
import Thumbnail from './Thumbnail';
import ArticleDate from './ArticleDate';

const Article = ({ article }) => {
    const { title, preamble, image, date } = article;
    return (
        <div>
            <Thumbnail src={image} />
            <Title>{title}</Title>
            <Preamble>{preamble}</Preamble>
            <ArticleDate>{date}</ArticleDate>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string,
        preamble: PropTypes.string,
        date: PropTypes.string,
        image: PropTypes.string,
    })
}

Article.defaultProps = {
    article: {
        title: '',
        preamble: '',
        date: '',
        image: '',
    },
}

export default Article;