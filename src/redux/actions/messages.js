import messagesService from "../services/messages";
import {
  REQUEST,
  EMPTY,
  SUCCESS,
  NOT_FOUND,
  ERROR,
  ADD,
  DELETE,
  UPDATE
} from "./ActionTypes";

/* this is just a helper function */
const receiveMessages = messages => {
  const allIds = []
  const byIds = {}
  messages.forEach(message => {
    allIds[allIds.length] = message.id
    byIds[message.id] = { message: message.message }
  })
  return {
    type: SUCCESS,
    payload: {
      byIds,
      allIds
    }
  }
}

const getMessages = async (dispatch, messagesService) => {
  //Set the applications to a "Loading" state
  dispatch({ type: REQUEST });

  try {
    const response = await messagesService.getMessages()

    if (!response.ok) {
      const error = { response }
      throw error
    }

    const messages = await response.json();
    const isMessagesEmpty = messages.length === 0;
    if (isMessagesEmpty) dispatch({ type: EMPTY });
    else dispatch(receiveMessages(messages));
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    if (isError404) dispatch({ type: NOT_FOUND });
    else dispatch({ type: ERROR });
  }
};

const createMessage = async (dispatch, messagesService, message) => {
  //Set the applications to a "Loading" state
  dispatch({ type: REQUEST });

  try {
    const response = await messagesService.createMessage(message)

    if (!response.ok) {
      const error = { response }
      throw error
    }

    const result = await response.json();
    dispatch({
      type: ADD,
      payload: result
    });
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    if (isError404) dispatch({ type: NOT_FOUND });
    else dispatch({ type: ERROR });
  }
};

const deleteMessage = async (dispatch, messagesService, id) => {
  //Set the applications to a "Loading" state
  dispatch({ type: REQUEST });

  try {
    const response = await messagesService.deleteMessage(id)

    if (!response.ok) {
      const error = { response }
      throw error
    }

    const result = await response.json();
    dispatch({
      type: DELETE,
      payload: result
    });
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    if (isError404) dispatch({ type: NOT_FOUND });
    else dispatch({ type: ERROR });
  }
};

const updateMessage = async (dispatch, messagesService, message) => {
  //Set the applications to a "Loading" state
  dispatch({ type: REQUEST });

  try {
    const response = await messagesService.updateMessage(message)

    if (!response.ok) {
      const error = { response }
      throw error
    }

    const result = await response.json();
    dispatch({
      type: UPDATE,
      payload: result
    });
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    if (isError404) dispatch({ type: NOT_FOUND });
    else dispatch({ type: ERROR });
  }
};

export const getMessagesInjector = dispatch => {
  return () => {
    getMessages(dispatch, messagesService);
  };
};

export const createMessageInjector = dispatch => {
  return (message) => { // message String
    createMessage(dispatch, messagesService, message)
  }
}

export const deleteMessageInjector = dispatch => {
  return (id) => { // id String
    deleteMessage(dispatch, messagesService, id)
  }
}

export const updateMessageInjector = dispatch => {
  return (message) => { // {id: String, message: String}
    updateMessage(dispatch, messagesService, message)
  }
}
