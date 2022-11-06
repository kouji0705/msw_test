import {useFetchAPI} from '../api/login';

export const Login = () => {
  const {isLoading, isError, data} = useFetchAPI();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>Error...</span>;
  }

  return (
    <div>
      ユーザID：{data.userId}
      <br />
      ID：{data.id}
      <br />
      タイトル:{data.title}
      <br />
      完了：{data.completed ? '完了' : '未完了'}
      <br />
    </div>
  );
};
