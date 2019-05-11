import { connect } from "react-redux";

import {
  getMessagesInjector,
  createMessageInjector,
  deleteMessageInjector,
  updateMessageInjector
} from "../redux/actions/messages";

import Main from "../components/Main";

const mapStateToProps = state => ({
  messagesState: state.messages
});

const mapDispatchToProps = dispatch => ({
  getMessages: getMessagesInjector(dispatch),
  createMessage: createMessageInjector(dispatch),
  deleteMessage: deleteMessageInjector(dispatch),
  updateMessage: updateMessageInjector(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

