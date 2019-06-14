import {
  CONFIRM_EMAIL_START,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE,

} from 'store/actions/confirmEmailTypes';
import confirmEmailReducer from '.';

describe('confirm email reducer Reducer', () => {
  it('Should return the initial state', () => {
    const newState = confirmEmailReducer(undefined, {});
    expect(newState.isLoading).toBe(false);
    expect(newState.isConfirmEmailSuccess).toBe(false);
    expect(newState.isConfirmEmailError).toBe(false);
  });

  it('Should start loading', () => {
    const newState = confirmEmailReducer(undefined, { type: CONFIRM_EMAIL_START });
    expect(newState.isLoading).toBe(true);
    expect(newState.isConfirmEmailSuccess).toBe(false);
    expect(newState.isConfirmEmailError).toBe(false);
  });

  it('Should set successfuly have confirmed the email', () => {
    const newState = confirmEmailReducer(undefined, { type: CONFIRM_EMAIL_SUCCESS });
    expect(newState.isLoading).toBe(false);
    expect(newState.isConfirmEmailSuccess).toBe(true);
    expect(newState.isConfirmEmailError).toBe(false);
  });

  it('Should have failed', () => {
    const newState = confirmEmailReducer(undefined, { type: CONFIRM_EMAIL_FAILURE });
    expect(newState.isLoading).toBe(false);
    expect(newState.isConfirmEmailSuccess).toBe(false);
    expect(newState.isConfirmEmailError).toBe(true);
  });
});
