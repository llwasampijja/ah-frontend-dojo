// react
import React, { Component } from 'react';

// 3rd party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import './Bookmarks.scss';

// helper functions
import { formatDate } from 'utils';

// actions
import {
  toggleBookmark,
  fetchBookmarks,
  removeBookmarkAction,
} from 'store/actions/bookmarkActions';


export class Bookmarks extends Component {
  componentDidMount() {
    const { dispatchFetchBookmarks } = this.props;
    dispatchFetchBookmarks();
  }

  /**
   * function to handle removing a bookmark on click
   * @param {object} - event
   * @return {function} - dispatch
   */
  removeBookmark = (e) => {
    const { id } = e.target;
    const { name } = e.target.dataset;
    const articleId = parseInt(id, 10);
    const { dispatchToggleBookmarks, dispatchRemoveBookmark } = this.props;

    dispatchToggleBookmarks(name);
    dispatchRemoveBookmark(articleId);
  }

  render() {
    const { bookmarks } = this.props;

    return (
      <div className="bookmarks">
        <div className="bookmarks__list">
          {
            bookmarks.length
              ? (bookmarks.map(bookmark => (
                <div key={bookmark.id} className="bookmarks__list__bookmark">
                  <div className="bookmarks__list__bookmark__title">
                    <Link
                      to={`/articles/${bookmark.article.id}`}
                      className="bookmarks__list__bookmark__title--link"
                    >
                      {bookmark.article.title}
                    </Link>
                  </div>
                  <div className="bookmarks__list__bookmark--description">
                    {bookmark.article.description}
                  </div>
                  <div className="bookmarks__list__bookmark--date">
                    {formatDate(bookmark.bookmarked_on)}
                  </div>
                  <div className="bookmarks__list__bookmark--author">
                    {bookmark.article.author}
                  </div>
                  <div
                    id={bookmark.id}
                    data-name={bookmark.article.slug}
                    className="bookmarks__list__bookmark__remove"
                    onClick={e => this.removeBookmark(e)}
                    tabIndex="0"
                    onKeyPress={this.handleKeyPress}
                    role="button"
                  >
                  Remove
                  </div>
                </div>
              )))
              : (
                <div className="bookmarks__blank">
                  <p className="bookmarks__blank--message">
                    There are no bookmarks yet.
                  </p>
                  <p className="bookmarks__blank--message">
                    Any articles you bookmark will be listed here.
                  </p>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

// prop type validation
Bookmarks.propTypes = {
  dispatchToggleBookmarks: PropTypes.func,
  dispatchFetchBookmarks: PropTypes.func,
  dispatchRemoveBookmark: PropTypes.func,
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    bookmarked_on: PropTypes.string,
    article: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  })),
};

// default props
Bookmarks.defaultProps = {
  dispatchToggleBookmarks: () => { },
  dispatchFetchBookmarks: () => { },
  dispatchRemoveBookmark: () => { },
  bookmarks: [],
};

export const mapStateToProps = ({
  dispatchToggleBookmarks,
  dispatchRemoveBookmark,
  bookmarkReducer: {
    isBookmarked,
    bookmarks,
  },
}) => ({
  dispatchToggleBookmarks,
  dispatchRemoveBookmark,
  isBookmarked,
  bookmarks,
});

export const mapDispatchToProps = dispatch => ({
  dispatchToggleBookmarks: slug => dispatch(toggleBookmark(slug)),
  dispatchFetchBookmarks: () => dispatch(fetchBookmarks()),
  dispatchRemoveBookmark: id => dispatch(removeBookmarkAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
