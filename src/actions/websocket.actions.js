
export const connect = (url = 'wss://localhost:6666') => ({
  type: 'WEBSOCKET:CONNECT',
  payload: { url }
});
