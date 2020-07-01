import server from './app';

server.listen({ port: 4000 }).then(() => {
  console.log('Server is running on http://localhost:4000');
});
