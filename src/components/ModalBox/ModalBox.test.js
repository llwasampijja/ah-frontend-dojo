// react libraries
import React from 'react';

// third party libraries
import { shallow, mount } from 'enzyme';

// components
import ModalBox from 'components/ModalBox';

// test ModalBox component
describe('ModalBox Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<ModalBox />);
    expect(component).toMatchSnapshot();
  });
});

// test use-case for ModalBox component
describe('Wrapped Components', () => {
  const props = {
    title: 'test',
    onClose: jest.fn(),
  };

  it('renders component', () => {
    const testWrappedComponent = () => <div><h1>Test</h1></div>;
    const TestRenderedComponent = ModalBox(testWrappedComponent);
    const calledComponent = mount(<TestRenderedComponent onClose={props.onClose} />);
    const wrapper = shallow(<TestRenderedComponent {...props} />);
    const mockCloseFunction = jest.fn();

    // test use-case for the title of ModalBox
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.modal__header__title').text()).toBe('test');

    // test use-case for onclick of button
    calledComponent.find('button').simulate('click');
    calledComponent.onClose = mockCloseFunction;
    calledComponent.onClose();
    expect(mockCloseFunction).toHaveBeenCalled();
    expect(calledComponent.onClose).toHaveBeenCalled();
  });
});
