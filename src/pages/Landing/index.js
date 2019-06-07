// react libraries
import React, { Component } from 'react';

// third-party libraries
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import './Landing.scss';

// components
import ArticlePreview from 'components/ArticlePreview';
import Navbar from 'components/NavBar/NavBar';
import Footer from 'components/Footer';

// thunks (action creators)
import { getAllArticles } from 'store/actions/articleActions';


export class LandingPage extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    if (getArticles) {
      getArticles();
    }
  }

  render() {
    const { articles } = this.props;
    return (
      // Navbar
      <div>
        <div className="landing">
          <Navbar />
          <div className="banner-image" />

          {/* Welcome message */}
          <div className="welcome-pitch">
            <div className="welcome-pitch__left">
              <p>
                Welcome to
              </p>
              <h3>
                Authors Haven
              </h3>
            </div>
            <div className="welcome-pitch__right">
              <p>
                Intrigue your interests
              </p>
              <p>
                Broaden your world
              </p>
              <p>
                Tell your story
              </p>
            </div>
          </div>

          {/* Article preview grid */}
          <div className="article-grid">
            <div className="article-grid__col">
              <div className="article-grid__col__header">
                <p className="article-grid__col__header__title">Most Popular</p>
              </div>
              {
                articles.map(article => <ArticlePreview key={article.id} article={article} />)
              }
            </div>
            <div className="article-grid__col">
              <div className="article-grid__col__header">
                <p className="article-grid__col__header__title">Most Liked</p>
              </div>
              {
                articles.map(article => <ArticlePreview key={article.id} article={article} />)
              }
            </div>
            <div className="article-grid__col">
              <div className="article-grid__col__header">
                <p className="article-grid__col__header__title">Most Trending</p>
              </div>
              {
                articles.map(article => <ArticlePreview key={article.id} article={article} />)
              }
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// proptype validation
LandingPage.propTypes = {
  getArticles: PropTypes.func,
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

LandingPage.defaultProps = {
  articles: [],
  getArticles: () => { },
};

const mapStateToProps = state => state.articles;

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles: () => getAllArticles(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
