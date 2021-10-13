import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import Caritem from "../Caritem";
import styles from "./styles";
import cars from "./cars";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Caritem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarList;
