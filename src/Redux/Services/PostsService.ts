import axios from 'axios';
import Post from '../Models/Post';

export default class PostService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  getAll = () => {
    return axios.get(`${this.baseUrl}/posts`);
  };

  add = (data: Post) => {
    return axios.post(`${this.baseUrl}/posts`, data);
  };

  update = (data: Post, id: number) => {
    return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  };
}
