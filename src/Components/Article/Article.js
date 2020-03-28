import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Preamble from './Preamble';
import Thumbnail from './Thumbnail';
import ArticleDate from './ArticleDate';

const Article = ({ article }) => {
    const { title, preamble, image, date } = article;
    return (
        <article className="box column is-full">
            <div className="columns">
                <div className="column is-one-quarter">
                    <Thumbnail src={image} />
                </div>
                <div className="column">
                    <div className="columns is-multiline">
                        <div className="column is-three-quarters">
                            <Title>{title}</Title>
                        </div>
                        <div className="column is-one-quarter">             
                            <ArticleDate>{date}</ArticleDate>
                        </div>
                        <div className="column is-full">
                            <Preamble>{preamble}</Preamble>
                        </div>
                    </div>        
                </div>
            </div>
        </article>
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