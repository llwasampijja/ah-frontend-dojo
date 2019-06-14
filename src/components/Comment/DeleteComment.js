// react
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const DeleteComment = ({
  id, author, articleSlug, deleteComment, authenticatedUsername
}) => (
  <Fragment>
    {authenticatedUsername === author && (
    <Button
      btnClass="fa fa-trash btn delete"
      btnEvent={(event) => {
        event.preventDefault();
        deleteComment(articleSlug, id);
      }}
      btnName=""
      disabled={authenticatedUsername !== author}
    />
    )}
  </Fragment>
);

DeleteComment.propTypes = {
  authenticatedUsername: PropTypes.string.isRequired,
  articleSlug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default DeleteComment;
