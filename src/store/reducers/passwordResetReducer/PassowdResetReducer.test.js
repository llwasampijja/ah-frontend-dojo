import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE,
  TOKEN_RESET_FAILURE,
} from 'store/actions/passwordResetTypes';

import passwordResetReducer from '.';

describe('Password reset Reducer', () => {
  it('Should return the initial state', () => {
    const newState = passwordResetReducer(undefined, {});
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(false);
  });

  it('Should indicate the start of loading', () => {
    const newState = passwordResetReducer(undefined, { type: PASSWORD_RESET_START });
    expect(newState.isLoading).toBe(true);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(false);
  });

  it('Should indicate a successful reset of the password', () => {
    const newState = passwordResetReducer(undefined, { type: PASSWORD_RESET_SUCCESS });
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(true);
    expect(newState.isPasswordResetError).toBe(false);
  });

  it('Should indicate failure in reseting the password due to a password error', () => {
    const newState = passwordResetReducer(undefined, { type: PASSWORD_RESET_FAILURE, error: ['Invalid password'] });
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(true);
    expect(newState.passwordErrors.length).toBe(1);
  });

  it('Should indicate failure in reseting the password due to a token error', () => {
    const newState = passwordResetReducer(undefined, { type: TOKEN_RESET_FAILURE, error: ['Token error'] });
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(true);
    expect(newState.tokenErrors.length).toBe(1);
  });
});
