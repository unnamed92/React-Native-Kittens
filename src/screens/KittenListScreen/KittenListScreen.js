import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { Card, Image } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import { Header } from "../../components";
import { kittensAdd, kittenSelect } from "../../store/actions/kittens";

function KittenListScreen(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const netInfo = useNetInfo();
  console.log(netInfo);

  function kittensGenerator(number) {
    let list = [];
    for (let i = 0; i < number; i++) {
      list.push({
        name: hundredKittens[Math.floor(Math.random() * hundredKittens.length)],
        avatar: `http://placekitten.com/${Math.floor(
          Math.random() * (9 - 0) + 0
        )}00/${Math.floor(Math.random() * (9 - 0) + 0)}00`
      });
    }
    return list;
  }
  useEffect(() => {
    props.kittensAdd(kittensGenerator(30));
  }, []);

  const FilterButton = ({ number }) => {
    return (
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => {
          console.log(number);
          setIsModalOpen(false);
          props.kittensAdd(kittensGenerator(number));
        }}
      >
        <Text>{number}</Text>
      </TouchableOpacity>
    );
  };

  function CustomModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalOpen}
        onRequestClose={() => {
          console.log("Modal has been closed.")
        }}
      >
        <View style={styles.modalContainer}>
          <View>
            <View style={styles.buttonsContainer}>
              <FilterButton number={30} />
              <FilterButton number={50} />
              <FilterButton number={100} />
            </View>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                style={styles.hideButton}
                onPress={() => {
                  setIsModalOpen(false);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  const hundredKittens = ["Kitten1", "Kitten2", "Kitten3", "Kitten4", "Kitten5", "Kitten6", "Kitten7", "Kitten8", "Kitten9", "Kitten10", "Kitten11", "Kitten12", "Kitten13", "Kitten14", "Kitten15", "Kitten16", "Kitten17", "Kitten18", "Kitten19", "Kitten20", "Kitten21", "Kitten22", "Kitten23", "Kitten24", "Kitten25", "Kitten26", "Kitten27", "Kitten28", "Kitten29", "Kitten30", "Kitten31", "Kitten32", "Kitten33", "Kitten34", "Kitten35", "Kitten36", "Kitten37", "Kitten38", "Kitten39", "Kitten40", "Kitten41", "Kitten42", "Kitten43", "Kitten44", "Kitten45", "Kitten46", "Kitten47", "Kitten48", "Kitten49", "Kitten50", "Kitten51", "Kitten52", "Kitten53", "Kitten54", "Kitten55", "Kitten56", "Kitten57", "Kitten58", "Kitten59", "Kitten60", "Kitten61", "Kitten62", "Kitten63", "Kitten64", "Kitten65", "Kitten66", "Kitten67", "Kitten68", "Kitten69", "Kitten70", "Kitten71", "Kitten72", "Kitten73", "Kitten74", "Kitten75", "Kitten76", "Kitten77", "Kitten78", "Kitten79", "Kitten80", "Kitten81", "Kitten82", "Kitten83", "Kitten84", "Kitten85", "Kitten86", "Kitten87", "Kitten88", "Kitten89", "Kitten90", "Kitten91", "Kitten92", "Kitten93", "Kitten94", "Kitten95", "Kitten96", "Kitten97", "Kitten98", "Kitten99", "Kitten100"]

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        kittenSelect(item);
        navigation.navigate("KittenDetails");
      }}
    >
      <Card title={item.name}>
        <Image
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
          source={{ uri: item.avatar }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo.
        </Text>
      </Card>
    </TouchableOpacity>
  );
  const { navigation, kittens, kittenSelect } = props;
  return (
    <View style={styles.container}>
      <CustomModal />
      {!netInfo.isConnected && (
        <Text style={styles.warningMessage}>No internet connection!</Text>
      )}

      <TouchableOpacity
        style={styles.filtersButtonContainer}
        onPress={() => setIsModalOpen(true)}
      >
        <Text style={styles.filters}>Items filter</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.list}
        data={kittens}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  filters: {
    textAlign: "center",
    fontSize: 18
  },
  filtersButtonContainer: {
    backgroundColor: "lightblue",
    margin: 15,
    padding: 20
  },
  buttonsContainer: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  modalContainer: {
    paddingTop: 40
  },
  closeButtonContainer: {
    alignItems: "center",
    textAlign: "center"
  },
  filterButton: {
    padding: 20,
    backgroundColor: "lightblue",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 8
  },
  hideButton: {
    backgroundColor: "lightblue",
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderRadius: 8,
    height: 48,
    marginTop: 15
  },
  warningMessage: {
    fontSize: 18,
    color: "red",
    textAlign: "center"
  },
  list: {
    marginBottom: 100
  }
});

KittenListScreen.navigationOptions = () => ({
  header: <Header title="Kitten List" />
});

const mapStateToProps = state => ({
  kittens: state.kittens.list
});

export default connect(
  mapStateToProps,
  { kittensAdd, kittenSelect }
)(KittenListScreen);
