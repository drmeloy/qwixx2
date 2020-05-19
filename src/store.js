const { createStore } = require('redux');
import reducer from './redux/reducers/mainReducer';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
