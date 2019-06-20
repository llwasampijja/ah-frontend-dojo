// components
import facebookReducer from 'store/reducers/socialReducer/Facebook';
// action types
import {
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
} from 'store/actions/socialTypes';

describe('state of the facebook reducer', () => {
  it('should set the sate to true when the request is sent', () => {
    const fbToken = { token: 'eyB0eJDiOiJKW1PiKCJ' };
    expect(
      facebookReducer(
        {
          isAuthenticating: true,
          isFacebookLoggedIn: true,
          token: fbToken,
        },
        {
          type: FACEBOOK_AUTH_SUCCESS,
          token: fbToken,
        },
      ),
    ).toEqual(
      {
        isAuthenticating: false,
        isFacebookLoggedIn: true,
        token: fbToken,
      },
    );
  });

  it('should set the sate to flase when the sent request fails', () => {
    const fbToken = { token: 'eyB0eJDiOiJKW1PiKCJ' };
    expect(
      facebookReducer(
        {
          isAuthenticating: false,
          isFacebookLoggedIn: false,
          token: fbToken,
        },
        {
          type: FACEBOOK_AUTH_FAIL,
          token: fbToken,
        },
      ),
    ).toEqual(
      {
        isAuthenticating: false,
        isFacebookLoggedIn: false,
        token: fbToken,
      },
    );
  });
});
