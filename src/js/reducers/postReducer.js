import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function postReducer(state = initialState.posts, action) {
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
     return action.posts
    case types.CREATE_POST_SUCCESS:
      browserHistory.push(`/posts/${action.post.id}`)
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ]
    case types.UPDATE_POST_SUCCESS:
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ]
    case types.DELETE_POST_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfpostToDelete = state.findIndex(post => {return post.id == action.post.id})
      newState.splice(indexOfpostToDelete, 1);
      browserHistory.push('/posts');
      return newState;
    }
    default:
      return state;
  }
}
