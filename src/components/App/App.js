import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import RootNavigator from "../../navigators/RootNavigator";
import store from "../../store";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
});

export default App;
