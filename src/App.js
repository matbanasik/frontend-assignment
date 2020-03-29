import React, { useState, useEffect, useRef } from 'react';
import Articles from './Components/Articles';
import CheckboxFilter from './Components/SourceFilters/CheckboxFilter';
import FiltersSection from './Components/SourceFilters/FiltersSection';
import './index.scss';

const useEndpoint = () => {
    const [endpointState, setEndpointState] = useState({
        data: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            const sportArticles = fetch('http://localhost:6010/articles/sports');
            const fashionArticles = fetch('http://localhost:6010/articles/fashion');

            const allArticlesPromises = await Promise.all([sportArticles, fashionArticles]);

            const allArticlesResponses = await Promise.all([allArticlesPromises[0].json(), allArticlesPromises[1].json()]);

            const allArticles = allArticlesResponses.reduce((acc, response) => {
                return [...acc, ...response.articles]
            }, [])
            
            setEndpointState((prevState) => ({...prevState, data: allArticles}));
        }

        try {
            setEndpointState((prevState) => ({...prevState, isLoading: true}));
            fetchData();
        } catch (e) {
            setEndpointState((prevState) => ({...prevState, error: e}));
        }

        setEndpointState((prevState) => ({...prevState, isLoading: false}));

    }, [])

    return [endpointState.data, endpointState.error, endpointState.isLoading];
}

const getArticlesByFilters = (articles, filters) => {
    const activeFilters = Object.keys(filters).filter((key) => {
        return filters[key];
    });
    const filteredArticles = articles.filter((article) => {
        return activeFilters.includes(article.category);
    })

    return filteredArticles;
};


const App = () => {
    const [data, error, isLoading]  = useEndpoint();
    const [articles, setArticles] = useState(data)
    const [filters, setFilters] = useState({
        fashion: true,
        sport: true,
    })

    const isMounted = useRef(false);

    useEffect(() => {
        setArticles(data)
    }, [data]);

    useEffect(() => {
        if (isMounted.current) {
            setArticles(getArticlesByFilters(data, filters))
        }
        isMounted.current = true;
    }, [data, filters])

    const filterBySource = (event) => {
        const { id, checked } = event.target;
        setFilters((prevState) => ({ ...prevState, [id]: checked }))
    }
    
    return (
        <div className="bd-main-container container media">
            <FiltersSection>
                <CheckboxFilter label="Sports" id="sport" checked={filters.sport} onChange={filterBySource} />
                <CheckboxFilter label="Fashion" id="fashion" checked={filters.fashion} onChange={filterBySource} />
            </FiltersSection>
            <Articles data={articles} />
        </div>
    )
}

export default App;