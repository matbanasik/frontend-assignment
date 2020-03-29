// This function could be splitted into smaller parts to test easier
const getArticlesByFilters = (articles, filters) => {
    const activeFilters = Object.keys(filters).filter((key) => {
        return filters[key];
    });
    const filteredArticles = articles.filter((article) => {
        return activeFilters.includes(article.category);
    })

    return filteredArticles;
};

export default getArticlesByFilters;