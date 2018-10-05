export default reducer = (state = {}, action) => {
    switch (action.type) {
      case 'WEBSOCKET:MESSAGE':
        // Assuming that your data is a DOMString in JSON format
        const data = JSON.parse(action.payload.data);
        return { ...state, ...data };
      default:
        return state;
    }
  };
