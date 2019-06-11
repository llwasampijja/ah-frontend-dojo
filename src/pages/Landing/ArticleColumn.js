// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import ArticlePreview from 'components/ArticlePreview';


const ArticleColumn = (props) => {
  const { columnTitle, articles } = props;
  return (
    <div className="article-grid__col">
      <div className="article-grid__col__header">
        <p className="article-grid__col__header__title">{columnTitle}</p>
      </div>
      {
        articles.map(article => <ArticlePreview key={article.id} article={article} />)
      }
    </div>
  );
};

ArticleColumn.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publish_status: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    delete_status: PropTypes.bool.isRequired,
    tagList: PropTypes.arrayOf(
      PropTypes.string,
    ),
    time_to_read: PropTypes.number.isRequired,
    read_stats: PropTypes.shape({
      views: PropTypes.number.isRequired,
      reads: PropTypes.number.isRequired,
    }),
    likeCount: PropTypes.arrayOf(PropTypes.shape({
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    })),
  })),
};

ArticleColumn.defaultProps = {
  articles: [],
};

export default ArticleColumn;
