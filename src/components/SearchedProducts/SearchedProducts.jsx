import { SearchContext } from "@/contexts/SearchContext";
import { useContext } from "react";
import { games } from "@/js/values";
import { SearchedProduct } from "./SearchedProduct/SearchedProduct";

export const SearchedProducts = () => {
  const { searchedText } = useContext(SearchContext);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchedText.trim().toLowerCase())
  );

  return (
    <main className="min-h-screen container-md bg-[#100a35] px-4 py-12 sm:px-6 lg:px-10">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Game Store
          </p>

          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Search Results
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            {filteredGames.length} games found
          </p>
        </div>

        {filteredGames.length > 0 ? (
          <div className="flex flex-col gap-5">
            {filteredGames.map((game) => (
              <SearchedProduct
                id={game.id}
                title={game.title}
                price={game.price}
                oldPrice={game.oldPrice}
                rate={game.rate}
                coverImage={game.coverImage}
                description={game.description}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-16 text-center">
            <h2 className="text-xl font-bold text-white">
              No games found
            </h2>

            <p className="mt-3 text-slate-400">
              Try searching for another game title.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};