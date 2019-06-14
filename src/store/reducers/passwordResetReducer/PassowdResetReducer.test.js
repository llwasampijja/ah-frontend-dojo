import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE
} from 'store/actions/passwordResetTypes';
import passwordResetReducer from '.';

describe('cpassowd reset Reducer', () => {
  it('Should return the initial state', () => {
    const newState = passwordResetReducer(undefined, {});
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(false);
  });

  it('Should start loading', () => {
    const newState = passwordResetReducer(undefined, { type: PASSWORD_RESET_START });
    expect(newState.isLoading).toBe(true);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(false);
  });

  it('Should set successfuly have reset the password', () => {
    const newState = passwordResetReducer(undefined, { type: PASSWORD_RESET_SUCCESS });
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(true);
    expect(newState.isPasswordResetError).toBe(false);
  });

  it('Should have failed', () => {
    const newState = passwordResetReducer(undefined, { type: PASSWORD_RESET_FAILURE });
    expect(newState.isLoading).toBe(false);
    expect(newState.isPassordResetSuccess).toBe(false);
    expect(newState.isPasswordResetError).toBe(true);
  });
});
