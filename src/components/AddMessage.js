import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddMessage = (props) => {
  const [input, setInput] = useState("")

  const handlePress = () => {
    props.onAdd( input )
    setInput("")
  }

  const handleChangeText = (text) => {
    setInput(text)
  }

  return (
    <View style={{padding: 10}}>
      <TextInput 
        style={{height: 40, padding: 5, borderColor: 'black', borderWidth: 2}} 
        value={input}
        onChangeText={handleChangeText}
      />
      <Button 
        title="Add Message"
        onPress={handlePress}
      />
    </View>
  )
}

export default AddMessage