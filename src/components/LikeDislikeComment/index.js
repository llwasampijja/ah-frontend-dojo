// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import LikeDislike from 'components/LikeDislike';

// actions
import { likeCommentAction, dislikeCommentAction } from 'store/actions/likeDislikeCommentActions';

export class LikeDislikeComment extends Component {
  constructor(props) {
    super(props);
    this.props = {
      likeStatus: false,
      dislikeStatus: false,
    };
  }

  /**
  * This is a function which calls the add likeComment action.
  * @param {none}
  * @return {callBackFunction}
  * @example
  * foo = () => {fee();}
  */
  onSubmitLikeHandler = () => {
    const { likeComment, articleSlug, commentId } = this.props;
    likeComment(articleSlug, commentId);
  }

  /**
  * This is a function which calls the add dislikeComment action.
  * @param {none}
  * @return {callBackFunction}
  * @example
  * foo = () => {fee();}
  */
  onSubmitDisikeHandler = () => {
    const { dislikeComment, articleSlug, commentId } = this.props;
    dislikeComment(articleSlug, commentId);
  }

  /**
  * This is a function which calls the add dislikeComment action.
  * @param {none}
  * @return {jsx}
  * @example
  * foo = () => {(<component />)}
  */
  render() {
    const {
      likeStatus,
      dislikeStatus,
    } = this.props;
    return (
      <LikeDislike
        likeFunction={this.onSubmitLikeHandler}
        dislikeFunction={this.onSubmitDisikeHandler}
        dislikeState={dislikeStatus}
        likeState={likeStatus}
      />
    );
  }
}

// props validation
LikeDislikeComment.propTypes = {
  likeStatus: PropTypes.bool,
  dislikeStatus: PropTypes.bool,
  likeComment: PropTypes.func.isRequired,
  dislikeComment: PropTypes.func.isRequired,
  articleSlug: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
};

// default props
LikeDislikeComment.defaultProps = {
  likeStatus: false,
  dislikeStatus: false,
};

/**
* This is a function which maps the dispatch to props
* @param {function} - A dictionary of param*
* @return {object of callback functions}
* @example
* foo(fn())
*/
export const mapDispatchToProps = dispatch => ({
  likeComment: (articleSlug, commentId) => {
    dispatch(likeCommentAction(articleSlug, commentId));
  },
  dislikeComment: (articleSlug, commentId) => {
    dispatch(dislikeCommentAction(articleSlug, commentId));
  },
});

export default connect(null, mapDispatchToProps)(LikeDislikeComment);
