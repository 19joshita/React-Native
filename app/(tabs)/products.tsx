import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "@/src/components/products/ProductCart";
import { useRouter } from "expo-router";
export type Products = {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: {
    count: number;
    rate: number;
  };
  price: number;
  category: string;
  quantity?: number;
};
const Products = () => {
  const router: any = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const res: any = await axios.get("https://fakestoreapi.com/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProducts(res.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error?.message || "Error during the product api");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size={30} />;
  }
  if (error) {
    return (
      <View>
        <Text>Error in the projects</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCart
              product={item}
              onPress={() => router.push(`/products/${item?.id}`)}
            />
          )}
        />
      </View>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
