import { useState } from "react";

export default function ShoppingCart({ cartItems, setCartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.giaBan * item.quantity,
    0
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Shopping Cart</h3>
              <button
                className="text-sm text-red-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 max-h-60 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.maSP} className="border-b pb-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.tenSP}</span>
                        <span>{item.giaBan.toLocaleString()} VND</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setCartItems((prev) =>
                                prev.map((i) =>
                                  i.maSP === item.maSP
                                    ? {
                                        ...i,
                                        quantity: Math.max(1, i.quantity - 1),
                                      }
                                    : i
                                )
                              );
                            }}
                            className="text-xs bg-gray-200 px-2 rounded cursor-pointer"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              setCartItems((prev) =>
                                prev.map((i) =>
                                  i.maSP === item.maSP
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i
                                )
                              );
                            }}
                            className="text-xs bg-gray-200 px-2 rounded cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            setCartItems((prev) =>
                              prev.filter((i) => i.maSP !== item.maSP)
                            );
                          }}
                          className="text-xs text-red-500 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-2 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>{totalPrice.toLocaleString()} VND</span>
                  </div>
                  <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded cursor-pointer">
                    Checkout
                  </button>
                  <button
                    onClick={() => setCartItems([])}
                    className="w-full mt-2 text-sm text-red-500 cursor-pointer"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
