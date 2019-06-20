/* eslint-disable jsx-a11y/click-events-have-key-events */
// react library
import React, { Component } from 'react';

// third party library
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

// import action creator for update profile
import {
  updateProfileRequest,
} from 'store/actions/profileActions';

// import default image
import {
  DEFAULT_IMAGE
} from '../../constants/constantStrings';

// import firebase configs
import firebase from '../../firebase/config';

// import styles
import './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
    };
  }

  imageClick = () => {
    this.setState({ showResults: true });
  };

  /*
    Because we named the inputs to match their
    corresponding values in state, it's
    super easy to update the state
  */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
  * This is a function uses firebase config setting to upload
  * image to our firebase storage
  * you can find the config in the firebase folder
  */
  uploadImage = (files) => {
    const fileload = firebase
      .storage()
      .ref(`images/${files[0].name}`)
      .put(files[0]);

    fileload.then(() => {
      firebase
        .storage()
        .ref(`images/${files[0].name}`)
        .getDownloadURL()
        .then((url) => {
          const image = {
            image: url,
          };
          const { authenticatedUsername } = this.props;
          const data = { profile: image };
          const { uploadProfileImage } = this.props;
          uploadProfileImage(data, authenticatedUsername);
        });
    });
  }

  render() {
    const {
      authenticatedUsername, profile: { profile },
      match: { params: { profileUser } }
    } = this.props;
    const {
      firstname, lastname, username, email, image, bio,
    } = profile;

    const { showResults } = this.state;
    return (
      <div className="sidebar">
        <div>
          {image.length === 0 && (
            <img src={DEFAULT_IMAGE} className="user-image-div" alt="profile" />
          )}
          {image.length > 0 && (
          <img src={image} className="user-image-div" alt="profile" />

          )}

          { profileUser === authenticatedUsername && showResults && (
            <Form>
              <Form.Input
                fluid
                type="file"
                accept="image/*"
                name="image"
                className="custom-file-upload"
                defaultValue={image}
                placeholder="Select Profile Pix"
                onChange={event => this.uploadImage(event.target.files)}
              />
            </Form>
          ) }
        </div>
        <div className="username center-align">{username}</div>
        <div className="fullname center-align">
          {firstname}
          {' '}
          {lastname}
        </div>
        <div className="email center-align">{email}</div>
        <div className="bio center-align ">{bio}</div>
        <div className="follow-div">
          <div className="follow-stats">
            <div className="count center-align ">
              0
            </div>
            <div className="title center-align">Followings</div>
          </div>
          <div>
            <div className="count center-align">
              0
            </div>
            <div className="title center-align">Followers</div>
          </div>
        </div>
        <hr className="sidebar-hr" />
      </div>
    );
  }
}

// Assigning props types
Sidebar.propTypes = {
  uploadProfileImage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      profileUser: PropTypes.string.isRequired,
    })
  }).isRequired,
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
  }),
  authenticatedUsername: PropTypes.string.isRequired,
};

// Assigning default props
Sidebar.defaultProps = {
  profile: {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    bio: '',
  },
};

/**
* This is a function which maps the props to state
* we pick profile info from state and username from state
*/
export const mapStateToProps = state => ({
  userData: state.profile,
  authenticatedUsername: state.loginReducer.user.username,
});

/**
* This is a function which dispatches updateProfileRequest function to props
*/
export const mapDispatchToProps = dispatch => ({
  uploadProfileImage: (data, authenticatedUsername) => {
    dispatch(updateProfileRequest(data, authenticatedUsername));
  }
});

/**
* Connect the mapStateToProps and mapDispatchToProps  to state
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
