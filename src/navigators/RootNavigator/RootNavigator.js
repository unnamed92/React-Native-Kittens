import { createStackNavigator, createAppContainer } from "react-navigation";
import { KittenDetailsScreen, KittenListScreen } from "../../screens";

const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      KittenList: KittenListScreen,
      KittenDetails: KittenDetailsScreen
    },
    {
      initialRouteName: "KittenList"
    }
  )
);
export default RootNavigator;
