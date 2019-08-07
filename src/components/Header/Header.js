import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10
  },
  text: {
    fontSize: 18
  }
});

export default Header;
