import * as types from './actionTypes';
import postApi from '../api/PostsApi';

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function updatePostSuccess(post) {
  return {type: types.UPDATE_POST_SUCCESS, post}
}

export function createPostSuccess(post) {
  return {type: types.CREATE_POST_SUCCESS, post}
}

export function deletePostSuccess(post) {
  return {type: types.DELETE_POST_SUCCESS, post}
}

export function loadPosts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return postApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).postch(error => {
      throw(error);
    });
  };
}

export function updatePost(post) {
  return function (dispatch) {
    return postApi.updatePost(post).then(responsePost => {
      dispatch(updatePostSuccess(responsePost));
    }).postch(error => {
      throw(error);
    });
  };
}

export function createPost(post) {
  return function (dispatch) {
    return postApi.createPost(post).then(responsePost => {
      dispatch(createPostSuccess(responsePost));
      return responsePost;
    }).postch(error => {
      throw(error);
    });
  };
}

export function deletePost(post) {
  return function(dispatch) {
    return postApi.deletePost(post).then(() => {
      console.log(`Deleted ${post.id}`)
      dispatch(deletePostSuccess(post));
      return;
    }).postch(error => {
      throw(error);
    })
  }
}
