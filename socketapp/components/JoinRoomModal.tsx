import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const JoinRoomModal = ({ modalVisible, setModalVisible, setRoomName }: any) => {
  const [text, setText] = React.useState<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setText("");
    setRoomName(text);
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.msgInput}
            blurOnSubmit={false}
            onChangeText={(e) => setText(e)}
            onSubmitEditing={onSubmit}
            value={text}
            placeholder="Room Name"
          />
          <Pressable style={styles.sendBtn} onPress={onSubmit}>
            <Text style={styles.sendBtnText}>Join</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default JoinRoomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
  },
  msgInput: {
    height: 40,
    fontSize: 18,
    fontWeight: "600",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  sendBtn: {
    height: 40,
    width: 80,
    backgroundColor: "#3f50b5",
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
