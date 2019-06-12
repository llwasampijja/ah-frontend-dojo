// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import LikeDislike from '.';

// props
const props = {
  dislikeState: false,
  likeState: false,
};

describe('tests for fucntionality of LikeDislike Component', () => {
  const component = shallow(<LikeDislike {...props} />);
  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('activates like when disliked an article', () => {
    component.setProps({ likeState: true });
    expect(component.find('.like-activated').exists()).toBe(true);
  });

  it('activates dislike when disliked an article', () => {
    component.setProps({ dislikeState: true });
    expect(component.find('.dislike-activated').exists()).toBe(true);
  });
});
