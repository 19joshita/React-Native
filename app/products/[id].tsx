import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const ProductDetail = () => {
  const getAsyncData = () => {
    const storage = AsyncStorage.getItem("cart");
  };
  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
