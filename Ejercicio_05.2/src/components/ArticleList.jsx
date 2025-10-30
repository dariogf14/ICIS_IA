import Article from './Article';

const ArticleList = ({ articles, handlePin }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      {articles.map(article => (
        <Article key={article.id} article={article} handlePin={handlePin} />
      ))}
    </div>
  );
};

export default ArticleList;