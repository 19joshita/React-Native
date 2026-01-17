import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { CartProvider } from "@/src/redux/cartContext";

const RootLayout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="products/[id]" options={{ title: "Details" }} />
      </Stack>
    </CartProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
