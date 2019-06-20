// components
import googleReducer from 'store/reducers/socialReducer/Google';
// action types
import {
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from 'store/actions/socialTypes';

describe('state of the google reducer', () => {
  it('should set the sate to true when the request is sent', () => {
    const googleToken = { token: 'eyB0eJDiOiJKW1PiKCJ' };
    expect(
      googleReducer(
        {
          isAuthenticating: true,
          token: googleToken,
        },
        {
          type: GOOGLE_AUTH_SUCCESS,
          isGoogleLoggedIn: true,
          token: googleToken,
        },
      ),
    ).toEqual(
      {
        isAuthenticating: false,
        isGoogleLoggedIn: true,
        token: googleToken,
      },
    );
  });

  it('should set the sate to flase when the sent request fails', () => {
    const googleToken = { token: 'eyB0eJDiOiJKW1PiKCJ' };
    expect(
      googleReducer(
        {
          isAuthenticating: false,
          isGoogleLoggedIn: false,
          token: googleToken,
        },
        {
          type: GOOGLE_AUTH_FAIL,
          token: googleToken,
        },
      ),
    ).toEqual(
      {
        isAuthenticating: false,
        isGoogleLoggedIn: false,
        token: googleToken,
      },
    );
  });
});
