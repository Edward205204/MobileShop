export default function ProductDetail({ product }) {
  if (!product) return null;

  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h3 className="text-lg font-medium mb-4">{product.tenSP}</h3>
          <img
            src={product.hinhAnh}
            alt={product.tenSP}
            className="w-full rounded-lg"
          />
        </div>

        <div className="md:w-2/3">
          <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
          <div className="space-y-2">
            <div className="border-b pb-2">
              <p className="font-medium">Screen:</p>
              <p>{product.manHinh}</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Operating System:</p>
              <p>{product.heDieuHanh}</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Front Camera:</p>
              <p>{product.cameraTruoc}</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Rear Camera:</p>
              <p>{product.cameraSau}</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">RAM:</p>
              <p>{product.ram}</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Storage:</p>
              <p>{product.rom}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
