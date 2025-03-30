export default function ProductItem({ product, onViewDetail, onAddToCart }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="relative pt-[100%]">
        <img
          src={product.hinhAnh}
          alt={product.tenSP}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold">{product.tenSP}</h3>
        <p className="text-gray-600 mt-2">
          {product.giaBan.toLocaleString()} VND
        </p>

        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onViewDetail(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
