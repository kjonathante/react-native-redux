import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text, Button, TouchableHighlight } from "react-native";

// import PropTypes from "prop-types";

import { SUCCESS } from "../redux/actions/ActionTypes";

import AddMessage from "../components/AddMessage"
import EditMessage from "../components/EditMessage"

// import MessagePage from "../components/MessagePage";
// import Repos from "../components/Repos";
// import NavBar from "../components/NavBar";
// import User from "./User";

function Main(props) {
  const [editId, setEditId] = useState("");
  const [input, setInput] = useState("");

  const { byIds, allIds, status } = props.messagesState;
  const { createMessage, deleteMessage, updateMessage } = props;

  const handlePressEdit = id => {
    setEditId(id);
  };
  const handleCancel = () => {
    setEditId("");
  };
  const handleUpdate = (message) => {
    updateMessage({id: editId, message} )
    setEditId("");
  }

  return (
    <View style={styles.container}>
      {status === SUCCESS ? (
        allIds.map(id =>
          editId === id ? (
            <View key={id}>
              <EditMessage 
                value={byIds[id].message} 
                onCancel={handleCancel}
                onUpdate={handleUpdate}
              />
            </View>
          ) : (
            <View style={styles.alternativeLayoutButtonContainer} key={id}>
              <Button title={byIds[id].message} onPress={() => handlePressEdit(id)} />
              <Button title="Delete" color="red" onPress={() => deleteMessage(id)}/>
            </View>
          )
        )
      ) : (
        <Text>{status}</Text>
      )}
      <AddMessage onAdd={createMessage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  alternativeLayoutButtonContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// Main.propTypes = {
//   messagesState: PropTypes.object,
//   getMessages: PropTypes.func,
//   createMessage: PropTypes.func,
//   deleteMessage: PropTypes.func,
//   updateMessage: PropTypes.func
// };

export default Main;
