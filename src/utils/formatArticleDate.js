import months from './monthsDictionary';

// This function could be splitted into smaller parts to test easier
const formatArticleDate = (article) => {
    const month = article.date.split(' ')[1];
    const translatedDate = new Date(article.date.replace(month, months.get(month)));
    return {...article, rawDate: translatedDate};
};

export default formatArticleDate;