import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import logo from "@/assets/image/logo-light.png";
import "./Nav.css";
import { Search } from "../Search/Search";
import { SearchContext } from "@/contexts/SearchContext";

// Lucide Icons
import {
  MenuIcon,
  X,
  ShoppingCart,
} from "lucide-react";

import { ShopCartContext } from "@/contexts/ShopCartContext";
import { CartItems } from "../CartItems/CartItems";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [shopCart, setShopCart] = useState([]);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  const { searched } = useContext(SearchContext);
  const { setSearched } = useContext(SearchContext);

  const { shopCartItems } = useContext(ShopCartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileNav = () => setMobileNav(false);

  if (!searched) {
    return (
      <>
        <nav
          className={
            scrolled ? "scrolled__nav p-5 flex z-[9999] " : "nav p-5 z-[9999]"
          }
        >
          <div className="navbar flex justify-between items-center gap-2 p-3 container-md">
            <div className="navbar__left flex gap-3 justify-center items-center">
              <Link to="/">
                <img src={logo} alt="gameShop logo" className="logo" />
              </Link>

              {/* DEMOS */}
              <div className="dropdown hidden md:block">
                <Link to="/" className="nav__link">
                  DEMOS<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span className="opacity-0">salam</span>
                </Link>

                <div className="dropdownMenu bg-[#1E174A] flex-col">
                  <Link className="dropdownLink" to="/dark">Dark</Link>
                  <a className="dropdownLink" href="">Shooter</a>
                  <a className="dropdownLink" href="">Anime</a>
                  <Link className="dropdownLink" to="/">Light</Link>
                  <a className="dropdownLink" href="">Landing</a>
                </div>
              </div>

              {/* SHOP */}
              <div className="dropdown hidden md:block">
                <Link to="/product" className="nav__link">
                  SHOP<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>games</span>
                </Link>

                <div className="dropdownMenu bg-[#1E174A] flex-col">
                  <Link className="dropdownLink" to="/product/">Product Style 1</Link>
                  <a className="dropdownLink" href="">Product Style 2</a>
                  <a className="dropdownLink" href="">Shop</a>
                  <a className="dropdownLink" href="">CheckOut</a>
                  <a className="dropdownLink" href="">Basket</a>
                </div>
              </div>

              {/* BLOG */}
              <div className="dropdown hidden md:block">
                <a href="" className="nav__link">
                  BLOG<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>news</span>
                </a>

                <div className="dropdownMenu bg-[#1E174A] flex justify-center gap-5 items-center">
                  <div className="flex flex-col">
                    <a className="dropdownLink" href="">Post Style 1</a>
                    <a className="dropdownLink" href="">Post Style 2</a>
                  </div>

                  <div className="flex flex-col">
                    <a className="dropdownLink" href="">Blog Style 1</a>
                    <a className="dropdownLink" href="">Blog Style 2</a>
                    <a className="dropdownLink" href="">Blog Style 3</a>
                  </div>
                </div>
              </div>

              {/* FEATURES */}
              <div className="dropdown hidden md:block">
                <div className="nav__link">
                  FEATURES<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>full list</span>
                </div>

                <div className="dropdownMenu bg-[#1E174A] flex-col">
                  <Link className="dropdownLink" to="/product">Product Style 1</Link>
                  <a className="dropdownLink" href="">Shooter</a>
                  <a className="dropdownLink" href="">Anime</a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - DESKTOP */}
            <div className="navbar__right hidden md:flex md:gap-2">
              <div className="dropdown">
                <a href="" className="nav__link">
                  THEME<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>Buy&Docs</span>
                </a>

                <div className="dropdownMenu bg-[#1E174A] flex-col">
                  <Link className="dropdownLink" to="/dark">Dark</Link>
                  <a className="dropdownLink" href="">Shooter</a>
                  <a className="dropdownLink" href="">Anime</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="bg-purple-800 hover:bg-purple-900 menubtns rounded-full p-2">
                  <i className="bi bi-person-fill text-white"></i>
                  <i className="ri-arrow-drop-down-fill text-white"></i>
                </button>

                <div className="dropdownMenu bg-[#1E174A] flex-col">
                  <a className="dropdownLink" href="">Login</a>
                  <a className="dropdownLink" href="">Register</a>
                  <a className="dropdownLink" href="">Profile</a>
                </div>
              </div>

              <div>
                <button
                  className="flex items-center justify-center bg-purple-800 hover:bg-purple-900 menubtns p-3 rounded-full"
                  onClick={() => setSearched(!searched)}
                >
                  <i className="bx bx-search text-white"></i>
                </button>
              </div>

              <div className="flex relative flex-col shop__items">
                <button className="flex items-center justify-center bg-purple-800 hover:bg-purple-900 menubtns rounded-full p-3">
                  <ShoppingCart color="white" size={20} />
                </button>
                <div className="shopItems hidden absolute top-full bg-[#08031099] right-0  p-3">
                  <CartItems />
                </div>
              </div>
            </div>

            {/* MOBILE NAV — ONLY THIS SECTION IS REDESIGNED */}
            <div className="relative flex items-center gap-2 md:hidden">
              {/* CART BUTTON */}
              <button
                type="button"
                aria-label="Shopping cart"
                aria-expanded={mobileCartOpen}
                onClick={() => {
                  setMobileCartOpen(!mobileCartOpen);
                  setMobileNav(false);
                }}
                className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                <ShoppingCart size={21} strokeWidth={1.8} />

                {shopCartItems?.length > 0 && (
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-violet-500" />
                )}
              </button>

              {/* MENU BUTTON */}
              <button
                type="button"
                aria-label={mobileNav ? "Close menu" : "Open menu"}
                aria-expanded={mobileNav}
                onClick={() => {
                  setMobileNav(!mobileNav);
                  setMobileCartOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-violet-500/50 hover:bg-white/5"
              >
                {mobileNav ? <X size={22} /> : <MenuIcon size={22} />}
              </button>

              {/* MOBILE MENU */}
              <div
                className={`absolute right-0 top-full z-[100] mt-3 w-[min(88vw,320px)] border border-white/10 bg-[#100B30] p-3 shadow-xl shadow-black/30 transition-all duration-200 ${
                  mobileNav
                    ? "visible translate-y-0 opacity-100"
                    : "invisible pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                {/* MAIN LINKS */}
                <div className="flex flex-col">
                  <Link
                    to="/"
                    onClick={closeMobileNav}
                    className="border-b border-white/[0.07] px-3 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    Home
                  </Link>

                  <Link
                    to="/dark"
                    onClick={closeMobileNav}
                    className="border-b border-white/[0.07] px-3 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    Dark
                  </Link>

                  <Link
                    to="/product"
                    onClick={closeMobileNav}
                    className="border-b border-white/[0.07] px-3 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    Shop
                  </Link>
                </div>

                {/* ACCOUNT LINKS */}
                <div className="grid grid-cols-2 gap-3 px-2 py-4">
                  <Link
                    to="/login"
                    onClick={closeMobileNav}
                    className="py-2 text-center text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMobileNav}
                    className="border border-violet-500/50 py-2 text-center text-sm text-white transition-colors hover:bg-violet-600"
                  >
                    Register
                  </Link>
                </div>

                {/* SEARCH */}
                <button
                  type="button"
                  onClick={() => {
                    setSearched(true);
                    closeMobileNav();
                  }}
                  className="flex w-full items-center gap-3 border-t border-white/10 px-3 py-3.5 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <i className="bx bx-search text-lg" />
                  Search games
                </button>
              </div>

              {/* MOBILE CART */}
              {mobileCartOpen && (
                <div className="absolute right-0 top-full z-[110] mt-3 w-[min(88vw,320px)] border border-white/10 bg-[#100B30] p-4 shadow-xl shadow-black/30">
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                    <h2 className="text-sm font-semibold text-white">
                      Your cart
                    </h2>

                    <button
                      type="button"
                      aria-label="Close cart"
                      onClick={() => setMobileCartOpen(false)}
                      className="p-1 text-slate-400 transition-colors hover:text-white"
                    >
                      <X size={19} />
                    </button>
                  </div>

                  <CartItems />
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* SEARCH OVERLAY — UNCHANGED */}
        <div
          className={
            searched
              ? "absolute bg-[#080325] flex justify-center items-center w-screen h-screen overflow-hidden z-10"
              : "hidden"
          }
        >
          <input
            placeholder="Site Search"
            className="text-white bg-[#ffffff80] rounded-xl w-[80%] p-6"
          />
        </div>
      </>
    );
  } else {
    return <Search />;
  }
};