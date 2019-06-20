// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './ArticlePreview.scss';

// components
import { formatDate } from 'utils';

const ArticlePreview = (props) => {
  const { article } = props;
  const {
    title,
    description,
    author,
    updatedAt,
    time_to_read,
  } = article;

  // maximum text lengths
  const descriptionLength = 100;
  const titleLength = 40;

  return (
    <div className="article-preview">
      <div>
        <div className="article-preview__image" />
      </div>
      <div className="article-preview__title">
        <p>
          {/* cut title lentgh */}
          {title.length > titleLength ? `${title.substring(0, titleLength - 3)}...`
            : title
          }
        </p>
      </div>
      <div className="article-preview__sample">
        <p>
          {/* cut description length */}
          {description.length > descriptionLength ? `${description.substring(0, descriptionLength - 3)}...`
            : description
          }
        </p>
      </div>
      <div className="article-preview__read-time">
        {`${time_to_read} min read`}
      </div>
      <div className="article-preview__footer">
        <div className="article-preview__footer__author">
          <p className="article-preview__footer__author--name">{author}</p>
        </div>
        <div className="article-preview__footer__date">
          <p className="article-preview__footer__date--updated">{formatDate(updatedAt)}</p>
        </div>
      </div>
    </div>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.shape({
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
    likeCount: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }),
  }),
};

ArticlePreview.defaultProps = {
  article: PropTypes.shape({}),
};

export default ArticlePreview;
