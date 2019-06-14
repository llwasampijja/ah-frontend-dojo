import React from 'react';
import { shallow } from 'enzyme';
import EmailConfirmationForm from '.';

describe('EmailConfirmation Component', () => {
  const props = {
    backdropId: 'id',
    closeModal: () => { },
  };
  it('should render without exploding', () => {
    const wrapper = shallow(<EmailConfirmationForm {...props} />);
    expect(wrapper.length).toBe(1);
  });

  // it('should call start logout on button click', () => {
  //   const mockLogout = jest.fn();
  //   const wrapper = shallow(<EmailConfirmationForm startLogout={mockLogout} />);
  //   wrapper.find('button').at(0).simulate('click');
  //   expect(mockLogout).toHaveBeenCalled();
  // });
});
