// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './LikeDislike.scss';
/**
 * This is a function which return the LikeDislike component
 * @param {*} n - mixed parameter types*
 * @return {jsx}
 * @example
 * foo = (props) => {}
 */
const LikeDislike = (props) => {
  const {
    dislikeState,
    likeState,
    likeFunction,
    dislikeFunction
  } = props;

  /**
* This is a function which adds a class to the like image button
* depending on whether its state is true or false.
* @param {none}
* @return {string}
* @example
* foo = () => {string}
*/
  const isLiked = () => {
    if (likeState) {
      return 'like-activated';
    }
    return 'like-dislike-deactivated';
  };

  /**
 * This is a function which adds a class to the dislike image button
 * depending on whether its state is true or false.
 * @param {none}
 * @return {string}
 * @example
 * foo = () => {string}
 */
  const isDisLiked = () => {
    if (dislikeState) {
      return 'dislike-activated';
    }
    return 'like-dislike-deactivated';
  };

  return (
    <div id="like-dislike-buttons-wrapper">
      <div className="like-dislike-wrapper">
        <button onClick={dislikeFunction} type="button"><img className={`like-dislike-img  ${isDisLiked()}`} id="dislike-img" src="src/assets/images/like.png" alt="like" /></button>
      </div>
      <div className="like-dislike-wrapper">
        <button onClick={likeFunction} type="button"><img className={`like-dislike-img  ${isLiked()}`} id="like-img" src="src/assets/images/like.png" alt="dislike" /></button>
      </div>
    </div>
  );
};

// props validations
LikeDislike.propTypes = {
  likeState: PropTypes.bool,
  dislikeState: PropTypes.bool,
  likeFunction: PropTypes.func,
  dislikeFunction: PropTypes.func,
};

// default props
LikeDislike.defaultProps = {
  likeState: true,
  dislikeState: false,
  likeFunction: () => { },
  dislikeFunction: () => { },
};

export default LikeDislike;
