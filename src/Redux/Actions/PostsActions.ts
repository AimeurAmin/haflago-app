import PostsService from '../Services/PostsService';
import Post from '../Models/Post';

function request() {
  return {type: '[Posts] REQUEST'};
}
function success(data: Post) {
  return {type: '[Posts] RECEIVED', payload: data};
}
function postAdded(data: Post) {
  return {type: '[Posts] New Post', payload: data};
}
function postUpdated(data: Post) {
  return {type: '[Posts] Update Post', payload: data};
}
function failure(error: Post) {
  return {type: '[Posts] ERROR', error};
}

const postsService = new PostsService();

export function getPosts() {
  return (dispatch: any) => {
    dispatch(request());
    postsService
      .getAll()
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}

export function addPost(data: Post) {
  return (dispatch: any) => {
    dispatch(request());
    postsService
      .add(data)
      .then(response => {
        if (response.status === 201) {
          dispatch(postAdded(response.data));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}

export function updatePost(data: Post, id: number) {
  return (dispatch: any) => {
    dispatch(request());
    postsService
      .update(data, id)
      .then(response => {
        if (response.status === 201) {
          dispatch(postUpdated(response.data));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}

const postsActions = {
  getPosts: getPosts,
  addPost: addPost,
  updatePost: updatePost,
};

export default postsActions;
