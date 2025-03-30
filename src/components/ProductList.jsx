import ProductItem from "./ProductItem";

export default function ProductList({ products, onViewDetail, onAddToCart }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem
            key={product.maSP}
            product={product}
            onViewDetail={onViewDetail}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
