
import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

export const CartItem = ({
  coverImage,
  title,
  price,
  count,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#100B30] p-4 text-white transition hover:border-violet-500/50">
      
      {/* Game image */}
      <img
        src={coverImage}
        alt={title}
        className="h-28 w-20 shrink-0 rounded-lg object-cover"
      />

      {/* Game information */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="truncate text-lg font-semibold">
          {title}
        </h3>

        {/* Individual price */}
        <p className="text-sm text-gray-400">
          Price per game: ${Number(totalPrice).toFixed(2)}
        </p>

        {/* Quantity controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDecrease}
            disabled={count <= 1}
            aria-label="Decrease quantity"
            className="rounded-md bg-white/10 p-1.5 hover:bg-violet-600 disabled:opacity-40"
          >
            <Minus size={16} />
          </button>

          <span className="text-sm">
            Quantity: <strong>{count}</strong>
          </span>

          <button
            onClick={onIncrease}
            aria-label="Increase quantity"
            className="rounded-md bg-white/10 p-1.5 hover:bg-violet-600"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Individual item's total price */}
      <div className="flex shrink-0 flex-col items-end gap-4">
        <button
          onClick={onRemove}
          aria-label={`Remove ${title}`}
          className="text-gray-400 transition hover:text-red-400"
        >
          <Trash2 size={19} />
        </button>

        <div className="text-right">
          <p className="text-xs text-gray-400">Item total</p>
          <p className="text-lg font-bold text-violet-300">
            ${(Number(price) * Number(count)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
