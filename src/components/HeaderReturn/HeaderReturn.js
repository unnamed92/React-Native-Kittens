import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

const HeaderReturn = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View style={styles.wrapper}>
          <Image
            style={{ width: 30, height: 30 }}
            resizeMode="cover"
            source={require("../../assets/images/arrow-back.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.wrapper]}>{title}</Text>
      <View style={styles.wrapper} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: "row"
  },
  wrapper: {
    width: width * 0.3
  },
  text: {
    fontSize: 18
  }
});

export default HeaderReturn;
