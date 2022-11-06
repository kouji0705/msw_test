import {rest} from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 2,
        id: 2,
        title: 'Mockですよ!!!',
        completed: false,
      })
    );
  }),
];
