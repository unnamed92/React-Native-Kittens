import React, { Fragment } from "react";
import {
  Text,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  View
} from "react-native";
import { connect } from "react-redux";
import { Image } from "react-native-elements";

import { HeaderReturn } from "../../components";

const { width, height } = Dimensions.get("window");

function KittenDetailsScreen(props) {
  const { kitten } = props;

  return (
    <>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: kitten.avatar }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{kitten.name}</Text>
        <Text>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Sed ut perspiciatis, unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam eaque
          ipsa, quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt, explicabo. Sed ut perspiciatis, unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium, totam
          rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt, explicabo.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: height * 0.4,
    marginTop: 10
  },
  textContainer: {
    padding: 15
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20
  }
});

KittenDetailsScreen.navigationOptions = ({ navigation }) => ({
  header: <HeaderReturn title="Kitten View" navigation={navigation} />
});

const mapStateToProps = state => ({
  kitten: state.kittens.selectedKitten
});

export default connect(
  mapStateToProps,
  null
)(KittenDetailsScreen);
