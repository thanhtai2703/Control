import { View, Text, Button, StyleSheet } from "react-native";
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  detailScreen: {
    backgroundColor: "#998",
    height: 60,
    padding: 10,
    borderWidth: 2,
    borderColor: "#965",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    alignItems: "center",
  },
});

const Details = (props: any) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "Details"> = useRoute();
  return (
    <View>
      <Button title="About" onPress={() => navigation.goBack()}></Button>
      <View style={{ flex: 1 }}>
        <Text style={styles.detailScreen}>{route.params?.id}</Text>
        <Text style={styles.detailScreen}>{route.params?.name}</Text>
      </View>
      <View>
        <Icon name="fan" size={20} color="#000" />
      </View>
    </View>
  );
};
export default Details;
