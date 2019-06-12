// react
import React from 'react';
import PropTypes from 'prop-types';
import DeleteComment from 'components/Comment/DeleteComment';
import LikeDislikeCommentd from '../LikeDislikeComment';


const date = timestamp => (new Date(timestamp).toString().slice(0, 25));
const CommentBox = (
  {
    id, author: { username, image },
    created_at, body, articleSlug, deleteComment, authenticatedUsername, likeStatus, dislikeStatus
  }
) => (
  <div className="comment">
    <img className="comment__img" alt="author" src={image} />
    <div className="comment__header">
      <p className="comment__header__author">{username}</p>
      <span className="comment__header__timestamp">{date(created_at)}</span>
    </div>
    <div className="comment__body">{body}</div>
    <LikeDislikeCommentd
      likeStatus={likeStatus}
      dislikeStatus={dislikeStatus}
      articleSlug={articleSlug}
      commentId={id}
    />
    <div className="comment_footer">
      {' '}
      {}
    </div>
    <div className="comment__footer">
      <DeleteComment
        author={username}
        id={id}
        articleSlug={articleSlug}
        deleteComment={deleteComment}
        authenticatedUsername={authenticatedUsername}
      />
    </div>

  </div>
);

CommentBox.propTypes = {
  authenticatedUsername: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  articleSlug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  likeStatus: PropTypes.bool,
  dislikeStatus: PropTypes.bool,
};

CommentBox.defaultProps = {
  likeStatus: false,
  dislikeStatus: false,
};

export default CommentBox;
