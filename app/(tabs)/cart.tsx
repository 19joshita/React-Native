import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useCart } from "@/src/redux/cartContext";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const { cart, removeCart, updateCart } = useCart();
  console.log("cart==================>>", cart);
  return (
    <View style={styles.cartContainer}>
      {cart?.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }: { item: any }) => (
            <View style={styles.cartBody}>
              <Image source={{ uri: item?.image }} style={styles.image}></Image>
              <View style={styles.contain}>
                <Text style={styles.title} numberOfLines={1}>
                  {item?.title}
                </Text>
                <Text style={styles.price}>$ {item?.price}</Text>
                <View style={styles.qtyContainer}>
                  <Pressable
                    style={styles.qtyBtn}
                    onPress={() => updateCart(item.id, item?.quantity - 1)}
                  >
                    <AntDesign name="minus" size={16} color="#000" />
                  </Pressable>

                  <Text style={styles.qtyText}>{item.quantity}</Text>

                  <Pressable
                    style={styles.qtyBtn}
                    onPress={() => updateCart(item.id, item?.quantity + 1)}
                  >
                    <AntDesign name="plus" size={16} color="#000" />
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <Text>No Cart Data available</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    padding: 16,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
    resizeMode: "contain",
  },
  contain: {
    flex: 1,
  },
  cartBody: {
    flexDirection: "row", // 👈 IMPORTANT
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "#2a2929",
    fontWeight: "500",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyBtn: {
    height: 28,
    width: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },

  qtyText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
