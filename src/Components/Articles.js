import React, { useState, useEffect } from 'react';
import Article from './Article/Article';
import ArticlesSection from './ArticlesSection';

const Articles = ({ data }) => {

    return (
        <ArticlesSection>
            {data.map((article) => {
                return <Article key={article.id} article={article} />
            })}
        </ArticlesSection>
    )
}

export default Articles;