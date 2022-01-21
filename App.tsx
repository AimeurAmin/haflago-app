/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import postsActions from './src/Redux/Actions/PostsActions';

const App = () => {
  const postsList = useSelector(({postsState: {posts}}: any) => posts) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {postsList &&
        postsList.map((post: any, index: number) => (
          <Text style={{color: '#fff'}} key={index}>
            {post.title}
          </Text>
        ))}
    </ScrollView>
  );
};

export default App;
