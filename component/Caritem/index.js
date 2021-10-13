import React from "react";
import { Text, View, ImageBackground } from "react-native";

import StyleButton from "../StyledButton";
import styles from "./styles";

const Caritem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("co was clicked");
          }}
        />
        <StyleButton
          type="secondary"
          content={"Exsisting Inventory"}
          onPress={() => {
            console.warn("EI was clicked");
          }}
        />
      </View>
    </View>
  );
};

export default Caritem;
