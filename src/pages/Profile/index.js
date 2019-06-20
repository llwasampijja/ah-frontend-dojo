// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

// import components
import Navbar from 'components/NavBar/index';
import ProfileSidebar from 'components/Profile/Sidebar';
import ProfileMain from 'components/Profile/Index';

// import actions creator
import { fetchProfileRequest } from 'store/actions/profileActions';

// import styles
import './Profile.scss';
import 'react-toastify/dist/ReactToastify.css';


export class Profile extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const { params: { profileUser } } = match;
      const { fetchProfile } = this.props;
      fetchProfile(profileUser);
    }
  }

  render() {
    return (
      <div>
        <ToastContainer autoClose={4000} />
        <Navbar />
        <div className="profile-container">
          <ProfileSidebar {...this.props} />
          <ProfileMain {...this.props} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      profileUser: PropTypes.string.isRequired,
    })
  }).isRequired,
  fetchProfile: PropTypes.func,
  authenticatedUser: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  profile: {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    bio: '',
  },
  fetchProfile: () => { },
};

export const mapStateToProps = state => ({
  profile: state.profile,
  authenticatedUser: state.loginReducer.user.username
});

export const mapDispatchToProps = dispatch => ({
  fetchProfile: (username) => {
    dispatch(fetchProfileRequest(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
