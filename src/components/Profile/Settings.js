// react library
import React, { Component } from 'react';

// third party libraries
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import action creators
import {
  updateProfileRequest,
} from 'store/actions/profileActions';

// import components;
import Button from '../Button';

// import styles
import './Setting.scss';

// import firebase config
import firebase from '../../firebase/config';

export class Settings extends Component {
  constructor(props) {
    super(props);
    const { userData: { firstname, lastname, bio } } = this.props;
    this.state = {
      firstname,
      lastname,
      bio,
    };
  }

  /**
  * This is a function which handles onclick events for the submit
  */
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = { profile: this.state };
    const { username } = this.props;
    const { updateProfile } = this.props;
    updateProfile(userData, username);
  };

  /**
  * This is a function for onChange events
  */
  handleChange = (event) => {
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
         const { username } = this.props;
         const data = { profile: image };
         const { updateProfile } = this.props;
         updateProfile(data, username);
       });
   });
 }

 render() {
   const {
     firstname, lastname, bio, image
   } = this.state;
   return (
     <div className="settings">
       <div className="settings__edit-profile">
         <Form onSubmit={this.handleSubmit}>
           <div>
             <span className="image_label"> Upload a profile picture</span>
             <input
               type="file"
               accept="image/*"
               name="image"
               className="custom-file-upload"
               defaultValue={image}
               placeholder="Select Profile Picture"
               onChange={event => this.uploadImage(event.target.files)}
             />
           </div>
           <Form.Group widths="equal">
             <Form.Input
               fluid
               label="First name"
               placeholder="John"
               name="firstname"
               defaultValue={firstname}
               onChange={this.handleChange}
             />
             <Form.Input
               fluid
               label="Last name"
               placeholder="Doe"
               name="lastname"
               defaultValue={lastname}
               onChange={this.handleChange}
             />
           </Form.Group>
           <Form.TextArea
             label="Bio"
             name="bio"
             className="settings__edit-profile--textareastyled"
             placeholder="Talk about yourself."
             maxLength="300"
             defaultValue={bio}
             onChange={this.handleChange}
             rows={5}
           />

           <div
             className="field"
           >

             <Button
               type="submit"
               id="editProfile__button"
               btnClass="edit-btn"
               btnName="Edit Profile"
               btnEvent={this.handleSubmit}
             />
           </div>
         </Form>
       </div>
     </div>
   );
 }
}

// Assigning props types
Settings.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    bio: PropTypes.string,
  }),
  username: PropTypes.string.isRequired,
};

// Assigning default props
Settings.defaultProps = {
  userData: {
    firstname: '',
    lastname: '',
    bio: '',
  },
};

/**
* This is a function which maps the props to state
* we pick profile info from state and username from state
*/
export const mapStateToProps = state => ({
  userData: state.profile,
  username: state.loginReducer.user.username,
});

/**
* This is a function shich dispatches updateProfileRequest function to props
*/
export const mapDispatchToProps = dispatch => ({
  updateProfile: (userData, username) => {
    dispatch(updateProfileRequest(userData, username));
  }
});

/**
* Connect the mapStateToProps and mapDispatchToProps  to state
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
