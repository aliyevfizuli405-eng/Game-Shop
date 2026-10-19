import { Star, ArrowUpRight, Gamepad2 } from "lucide-react";
import {Link} from "react-router"

export const SearchedProduct = ({
  title,
  price,
  oldPrice,
  rate,
  id,
  coverImage,
  description,
}) => {
  return (
    <article className="group grid grid-cols-1 gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#100b30] p-4 transition-all duration-300 hover:border-violet-500/50 hover:bg-[#151039] sm:grid-cols-[160px_1fr] sm:gap-6 sm:p-5 lg:grid-cols-[200px_1fr]">

      {/* Game cover */}
      <div className="relative overflow-hidden rounded-xl bg-[#080325]">
        <img
          src={coverImage}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full sm:min-h-52"
        />

        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1.5 text-sm font-semibold text-yellow-400 backdrop-blur-md">
          <Star size={14} fill="currentColor" />
          {rate}
        </span>
      </div>

      {/* Game information */}
      <div className="flex min-w-0 flex-col justify-between gap-5 py-1">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            <Gamepad2 size={16} />
            Game Store
          </div>

          <h2 className="text-xl font-bold text-white transition-colors group-hover:text-violet-300 sm:text-2xl lg:text-3xl">
            {title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400 sm:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
              Price
            </p>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white">
                ${Number(price).toFixed(2)}
              </span>

              {oldPrice != null && Number(oldPrice) > Number(price) && (
                <span className="text-sm text-slate-500 line-through">
                  ${Number(oldPrice).toFixed(2)}
                </span>
              )}
            </div>
          </div>
        <Link to={`/product/${id}`}>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20 active:scale-95"
          >
            View Game
            <ArrowUpRight size={17} />
          </button>
          </Link>
        </div>
      </div>
    </article>
  );
};