import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState([
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "applephone.jpg",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cartItems, setCartItems] = useState([]);

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.maSP === product.maSP);
      if (existingItem) {
        return prevItems.map((item) =>
          item.maSP === product.maSP
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">Mobile Shop</h1>
        <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
      </header>

      <ProductList
        products={products}
        onViewDetail={handleViewDetail}
        onAddToCart={handleAddToCart}
      />

      <ProductDetail product={selectedProduct} />
    </div>
  );
}

export default App;
