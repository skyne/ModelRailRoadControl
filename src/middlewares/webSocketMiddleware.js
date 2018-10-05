let websocket;

/**
 * An example middleware to handle WebSocket connections.
 * NB: There is no exception handling!
 */
export const webSocketMiddleware = store => next => action => {

  const dispatch = store.dispatch;
  switch (action.type) {
    // User request to connect
    case 'WEBSOCKET:CONNECT':
      console.log('WEBSOCKET:CONNECT',action);
      // Configure the object
      websocket = new WebSocket(action.payload.url);

      // Attach the callbacks
      websocket.onopen = () => dispatch({ type: 'WEBSOCKET:OPEN' });
      websocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      websocket.onmessage = (event) => dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });

      break;

    // User request to send a message
    case 'WEBSOCKET:SEND':
      websocket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case 'WEBSOCKET:DISCONNECT':
      websocket.close();
      break;

    default: // We don't really need the default but ...
      break;
  };

  return next(action);
};
