import Pusher from 'pusher-js';

const pusher = new Pusher('7c2a444602df56ebc9c8', {
  cluster: 'ap2',
  useTLS: true,
});

export default pusher;