import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Cart } from "./src/screens/Cart";
import { Product } from "./src/screens/Product";
import { Products } from "./src/screens/Products";
import { CartItem, Product as ProductType } from "./src/types/product";

type Screen = "products" | "detail" | "cart";

export default function App() {
  const [screen, setScreen] = useState<Screen>("products");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  function handleSelectProduct(product: ProductType) {
    setSelectedProduct(product);
    setScreen("detail");
  }

  function handleBackToList() {
    setScreen("products");
  }

  function handleOpenCart() {
    setScreen("cart");
  }

  function handleAddToCart(product: ProductType, quantity: number) {
    setCart((current) => {
      const existingItem = current.find((item) => item.product.id === product.id);

      if (existingItem) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { product, quantity }];
    });

    setScreen("products");
  }

  function handleChangeQuantity(productId: number, quantity: number) {
    setCart((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function handleRemoveItem(productId: number) {
    setCart((current) => current.filter((item) => item.product.id !== productId));
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#fff" }}>
      {screen === "detail" && selectedProduct ? (
        <Product
          product={selectedProduct}
          onBack={handleBackToList}
          onAddToCart={handleAddToCart}
        />
      ) : screen === "cart" ? (
        <Cart
          items={cart}
          onBack={handleBackToList}
          onChangeQuantity={handleChangeQuantity}
          onRemoveItem={handleRemoveItem}
        />
      ) : (
        <Products
          onSelectProduct={handleSelectProduct}
          onOpenCart={handleOpenCart}
          cartCount={cartCount}
        />
      )}
    </SafeAreaProvider>
  );
}
