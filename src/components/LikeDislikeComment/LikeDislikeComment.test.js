// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import { LikeDislikeComment, mapDispatchToProps } from '.';

describe('tests the UI functionality of LikeDislikeComment component', () => {
  const mockedFunction = jest.fn();
  const component = shallow(
    <LikeDislikeComment
      articleSlug="test-article"
      commentId={6}
      likeComment={mockedFunction}
      dislikeComment={mockedFunction}
      getLikeCommentState={mockedFunction}
    />
  );


  it('test if likedislike component renders well', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls likeComment function', () => {
    component.setProps({
      likeComment: mockedFunction,
      dislikeComment: mockedFunction,
      getLikeCommentState: mockedFunction,
    });
    mapDispatchToProps(mockedFunction).likeComment();
    expect(mockedFunction).toHaveBeenCalled();
  });

  it('calls dislikeComment function', () => {
    component.setProps({
      likeComment: mockedFunction,
      dislikeComment: mockedFunction,
      getLikeCommentState: mockedFunction
    });
    mapDispatchToProps(mockedFunction).dislikeComment();
    expect(mockedFunction).toHaveBeenCalled();
  });

  it('submits a like for a specific comment', () => {
    component.setProps({
      likeComment: mockedFunction,
      dislikeComment: mockedFunction,
      getLikeCommentState: mockedFunction,
      articleSlug: 'heooe0-he',
      commentId: 4
    });
    const instance = component.instance();
    instance.onSubmitLikeHandler();
    expect(instance.props.dislikeComment).toHaveBeenCalled();
  });

  it('submits a dislike for a specific comment', () => {
    component.setProps({
      likeComment: mockedFunction,
      dislikeComment: mockedFunction,
      getLikeCommentState: mockedFunction,
      articleSlug: 'heooe0-he',
      commentId: 4
    });
    const instance = component.instance();
    instance.onSubmitDisikeHandler();
    expect(instance.props.dislikeComment).toHaveBeenCalled();
  });

  it('should fetch comment like status', () => {
    component.setProps({
      likeComment: mockedFunction,
      dislikeComment: mockedFunction,
      articleSlug: 'heooe0-he',
      commentId: 4,
      getLikeCommentState: mockedFunction,
    });
    const instance = component.instance();
    instance.onSubmitDisikeHandler();
    expect(instance.props.getLikeCommentState).toHaveBeenCalled();
  });
});
