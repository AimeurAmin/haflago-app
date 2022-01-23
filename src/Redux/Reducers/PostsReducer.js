const initialState = {
  loading: false,
  error: false,
  posts: [],
},
PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case '[Posts] REQUEST':
      return {
        ...state,
        loading: true,
      };
    case '[Posts] RECEIVED':
      console.log('action.payload');
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: false,
        posts: [...action.payload],
      };
    case '[Posts] ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case '[Posts] New Post':
      return {
        ...state,
        posts: [...state.posts, {...action.payload}],
        loading: false,
        error: true,
      };
    case '[Posts] Update Post':
      return {
        ...state,
        posts: [
          ...state.posts.map(post =>
            post.id === action.payload.id ? {...action.payload} : {...post},
          ),
        ],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default PostsReducer;
