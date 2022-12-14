import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Icon, Input } from "react-native-elements";
import { dp } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(
    () => {
      navigation.setOptions({
        title: "Add a New Chat",
        headerBackTitle: "Back To Chats"
      });
    },
    [navigation]
  );

  const createChat = async () => {
    await dp
      .collection("chats")
      .add({
        chatName: input
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a Chat Name"
        value={input}
        onChangeText={text => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create New Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%"
  }
});
