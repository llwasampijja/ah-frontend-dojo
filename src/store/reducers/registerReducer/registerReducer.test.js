// reducers
import registerReducer from 'store/reducers/registerReducer';

// action types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  IS_SIGNING_UP,
} from 'store/actions/types';

/**
 * This is a function.
 * test registerUser reducer
 */
describe('registerUser state', () => {
  it('it should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual({
      signupSuccess: '',
      signupError: { errors: { username: '', email: '', password: '' } },
      isSignupSuccessful: false,
    });
  });

  it('it should return a successful signup response and state', () => {
    expect(registerReducer({
      signupSuccess: '',
      signupError: { errors: { username: '', email: '', password: '' } },
      isSignupSuccessful: false,
    },
    {
      type: SIGNUP_SUCCESS,
      payload: { success: 'sjsjsjsjsbfuwih' },
    })).toEqual({
      signupSuccess: { success: 'sjsjsjsjsbfuwih' },
      isSignupSuccessful: true,
      isSigningUp: false,
      signupError: { errors: { username: '', email: '', password: '' } },
    });
  });

  it('it should return the correct states on signup error', () => {
    expect(registerReducer({
      signupSuccess: '',
      signupError: { errors: { username: '', email: '', password: '' } },
      isSignupSuccessful: false,
    },
    {
      type: SIGNUP_ERROR,
      payload: { errors: { username: '', email: '', password: '' } },
    })).toEqual({
      signupError: { errors: { username: '', email: '', password: '' } },
      isSignupSuccessful: false,
      isSigningUp: false,
      signupSuccess: '',
    });
  });

  it('should return the right state for signing up', () => {
    expect(registerReducer({
      signupSuccess: '',
      signupError: { errors: { username: '', email: '', password: '' } },
      isSignupSuccessful: false,
    },
    {
      type: IS_SIGNING_UP,
    })).toEqual({
      isSigningUp: true,
      signupError: { errors: { username: '', email: '', password: '' } },
      signupSuccess: '',
      isSignupSuccessful: false,
    });
  });
});
