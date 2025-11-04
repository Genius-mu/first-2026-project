"use client";
import React, { useState } from "react";
// import { currencyFormatter } from "../product/[id]/page"; // Fix import for use in client boundary
const currencyFormatter = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

function AddToCartClient({
  productId,
  price,
}: {
  productId: string;
  price: number;
}) {
  const [qty, setQty] = useState<number>(1);
  const [adding, setAdding] = useState(false);
  const increment = () => setQty((q) => Math.min(99, q + 1));
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  const handleAddToCart = async () => {
    setAdding(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      console.log(`Added ${qty} of ${productId} (price ${price}) to cart`);
      alert(`Added ${qty} item(s) to cart`);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
      <div className="inline-flex items-center rounded-lg overflow-hidden border">
        <button
          aria-label="decrease quantity"
          onClick={decrement}
          className="px-4 py-2"
        >
          -
        </button>
        <div className="px-6 py-2 font-medium">{qty}</div>
        <button
          aria-label="increase quantity"
          onClick={increment}
          className="px-4 py-2"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={adding}
        className="mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-95 disabled:opacity-60"
      >
        {adding ? "Adding…" : `Add to Cart — ${currencyFormatter(price * qty)}`}
      </button>
    </div>
  );
}

export default AddToCartClient;
