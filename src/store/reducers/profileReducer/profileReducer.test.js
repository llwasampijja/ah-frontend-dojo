import {
  fetchUserProfile,
  fetchUserProfileError,
} from 'store/actions/profileActions';
import profileReducer from './index';


const initialState = {
  firstname: 'nadra',
  lastname: 'john',
  bio: 'this is my bio',
  image: 'http://johndoeimagelink.jpg',
  email: 'nadrajohn@gmail.com',
  username: 'nadralia',
  isLoading: false,
};

const profile = {
  firstname: 'john',
  lastname: 'doe',
  bio: 'I am the original 007',
  image: 'http://johndoeimagelink.jpg',
  email: 'johndoe@gmail.com',
  username: 'johndoe',
  error: {},
  isLoading: false,
};

describe('profile reducers', () => {
  it('should return the default state ', () => {
    const state = profileReducer(initialState, {
      type: 'unknown',
    });
    expect(state).toEqual(initialState);
  });

  it('should return the profile', () => {
    const action = fetchUserProfile(profile);
    const state = profileReducer(initialState, action);
    expect(state.profile).toEqual(action.profile);
    expect(state.isLoading).toEqual(false);
  });

  it('should return an error if any on getting a profile', () => {
    const action = fetchUserProfileError();
    const state = profileReducer(initialState, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
  });
});
