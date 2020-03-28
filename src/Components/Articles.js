import React, { useState, useEffect } from 'react';
import Article from './Article/Article';
import ArticlesSection from './ArticlesSection';

const useEndpoint = (endpoint) => {
    const [endpointState, setEndpointState] = useState({
        data: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            const articles = await fetch(endpoint);
            const articlesJson = await articles.json();
            setEndpointState((prevState) => ({...prevState, data: articlesJson.articles}));
        }

        try {
            setEndpointState((prevState) => ({...prevState, isLoading: true}));
            fetchData();
        } catch (e) {
            setEndpointState((prevState) => ({...prevState, error: e}));
        }

        setEndpointState((prevState) => ({...prevState, isLoading: false}));

    }, [endpoint])

    return [endpointState.data, endpointState.error, endpointState.isLoading];
}

const Articles = () => {
    const [data, error, isLoading]  = useEndpoint('http://localhost:6010/articles/sports');

    return (
        <ArticlesSection>
            {data.map((article) => {
                return <Article key={article.id} article={article} />
            })}
            {isLoading && <div>Loading...</div>}
        </ArticlesSection>
    )
}

export default Articles;