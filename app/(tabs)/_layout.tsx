import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: "Form",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
