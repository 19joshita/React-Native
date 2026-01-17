import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/src/redux/cartContext";
type Props = {
  product: any;
  onPress: () => void;
};

const ProductCart = ({ product, onPress }: Props) => {
  const { addToCart } = useCart();

  return (
    <TouchableOpacity style={styles?.container} onPress={onPress}>
      <Image source={{ uri: product?.image }} style={styles.image} />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {product?.title}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {product?.category}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles?.price}>${product?.price}</Text>
        <Text style={styles?.rate}>
          <Ionicons name="star" size={20} color={"yellow"} />
          {product?.rating?.rate}
        </Text>
      </View>
      <View style={styles.cartButtonContainer}>
        <Pressable onPress={() => addToCart(product)} style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add To Cart</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    height: 100,
    // width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  category: {
    color: "green",
    padding: 4,
    borderRadius: 10,
    textTransform: "capitalize",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
  },
  rate: {
    fontSize: 16,
    gap: 4,
  },
  cartButtonContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  cartButton: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cartButtonText: {
    color: "#fff",
  },
});
