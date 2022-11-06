import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

export const getAPI = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  const {data} = await axios.get<User>(baseUrl);
  return data;
};

export const useFetchAPI = () => {
  return useQuery(['test'], () => getAPI());
};

export type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
