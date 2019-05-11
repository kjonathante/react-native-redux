import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {View, Text} from "react-native"
import ConnectedMain from "./src/containers/ConnectedMain";
import reducer from "./src/redux/reducers";

import { getMessagesInjector } from "./src/redux/actions/messages"

const store = createStore(reducer);

/* this will initialize the state */
getMessagesInjector( store.dispatch )()

const App = () => (
  <Provider store={store}>
    <ConnectedMain />
  </Provider>
)

export default App