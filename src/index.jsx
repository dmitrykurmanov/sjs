import { createStore } from "redux"
import { h, render } from 'preact'
import { Provider } from 'preact-redux';

import appReducer from "./reducers"
import App from "./containers/App.jsx"

export class Model {
  constructor(options = {}) {
    const initialState = {
      counter: options.counter
    }

    const store = createStore(
      appReducer,
      initialState, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    this.render = (rootSelector = "body") => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(rootSelector)
      )

      if (module.hot) {
        require('preact/debug');
        //module.hot.accept('./components/app', () => requestAnimationFrame(init) ); //HMR
      }
    }
  }
}
