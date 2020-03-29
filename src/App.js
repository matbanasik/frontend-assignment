import React, { useState, useEffect, useRef } from 'react';
import { orderBy } from 'lodash'; 
import Articles from './Components/Articles';
import CheckboxFilter from './Components/SourceFilters/CheckboxFilter';
import FiltersSection from './Components/SourceFilters/FiltersSection';
import SortButton from './Components/SortButton/SortButton';
import MainContentContainer from './Components/MainContentContainer';
import ErrorMessage from './Components/ErrorMessage';
import formatArticleDate from './utils/formatArticleDate';
import './index.scss';

const useEndpoint = () => {
    const [endpointState, setEndpointState] = useState({
        data: [],
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sportArticles = fetch('http://localhost:6010/articles/sports');
                const fashionArticles = fetch('http://localhost:6010/articles/fashion');
                
                const allArticlesPromises = await Promise.all([sportArticles, fashionArticles]);
    
                const allArticlesResponses = await Promise.all([allArticlesPromises[0].json(), allArticlesPromises[1].json()]);
    
                const allArticles = allArticlesResponses.reduce((acc, response) => {
                    return [...acc, ...response.articles]
                }, []).map(formatArticleDate)
                
                setEndpointState((prevState) => ({...prevState, data: allArticles}));
            } catch (error) {
                const message = 'Unable to fetch articles. Please try again later.'
                setEndpointState((prevState) => ({...prevState, error: message}));
            }

        }

        fetchData();
    }, [])

    return [endpointState.data, endpointState.error];
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
    const [data, error]  = useEndpoint();
    const [articles, setArticles] = useState(data)
    const [sortingOrder, setSortingOrder] = useState('desc');
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

    const sortByDate = () => {
        setSortingOrder((prevState) => {
            return prevState === 'desc' ? 'asc' : 'desc';
        })
    }

    useEffect(() => {
        setArticles((prevState) => {
            return orderBy(prevState, 'rawDate', sortingOrder);;
        })
    }, [sortingOrder]);
    
    return (
        <MainContentContainer>
            {!error && (
                <>
                    <SortButton onChange={sortByDate} />
                    <FiltersSection>
                        <CheckboxFilter label="Sports" id="sport" checked={filters.sport} onChange={filterBySource} />
                        <CheckboxFilter label="Fashion" id="fashion" checked={filters.fashion} onChange={filterBySource} />
                    </FiltersSection>
                    <Articles data={articles} />
                </>
            )}
            {error && <ErrorMessage message={error} />}
        </MainContentContainer>
    )
}

export default App;