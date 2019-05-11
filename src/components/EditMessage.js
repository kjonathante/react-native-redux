import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddMessage = (props) => {
  const [input, setInput] = useState(props.value)

  const handlePressSave = () => {
    props.onUpdate(input)
  }

  const handlePressCancel = () => {
    props.onCancel()
  }

  const handleChangeText = (text) => {
    setInput(text)
  }

  return (
    <View style={{padding: 10, flexDirection: 'row'}}>
      <TextInput 
        style={{height: 40, padding: 5, borderColor: 'black', borderWidth: 2, flex: 1}} 
        value={input}
        onChangeText={handleChangeText}
      />
      <Button 
        title="Save"
        onPress={handlePressSave}
        style={{flex: 0.1}}
      />
      <Button 
        title="Cancel"
        onPress={handlePressCancel}
        style={{flex: 0.1}}
      />
    </View>
  )
}

export default AddMessage