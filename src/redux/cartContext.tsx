import { Products } from "@/app/(tabs)/products";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CartContextType = {
  cart: Products[];
  addToCart: (product: Products) => void;
  updateCart: (id: number, qty: number) => void;
  removeCart: (id: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Load cart from AsyncStorage
  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem("cart");
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.log("Error loading cart:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  // 🔹 Save cart whenever it changes
  useEffect(() => {
    const saveCart = async () => {
      try {
        if (!loading) {
          await AsyncStorage.setItem("cart", JSON.stringify(cart));
        }
      } catch (error) {
        console.log("Error saving cart:", error);
      }
    };

    saveCart();
  }, [cart, loading]);

  // 🔹 Add to cart
  const addToCart = (product: Products) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🔹 Update quantity
  const updateCart = (id: number, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) =>
            item.id === id ? { ...item, quantity: qty } : item
          )
    );
  };

  // 🔹 Remove item
  const removeCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Total price
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCart, removeCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🔹 Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
