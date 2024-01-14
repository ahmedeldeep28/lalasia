import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../element/Logo";
import { Bars, XMark, ShopingCart } from "./../Icons";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/slice/cartSlice";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { isUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      <header className="h-auto w-full sticky	top-0 z-50 bg-white  border-b">
        <div className="container h-20 flex justify-between items-center">
          {/* logo */}
          <div>
            <Logo />
          </div>

          {/* links */}
          <ul className="hidden md:flex gap-x-7">
            <li
              className={`nav__link ${
                router.pathname === "/" ? "nav__link-active" : ""
              }`}
            >
              <Link href="/">home</Link>
            </li>
            <li
              className={`nav__link ${
                router.pathname === "/products" ? "nav__link-active" : ""
              }`}
            >
              <Link href="/products">products</Link>
            </li>
            <li
              className={`nav__link ${
                router.pathname === "/services" ? "nav__link-active" : ""
              }`}
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={`nav__link ${
                router.pathname === "/blog" ? "nav__link-active" : ""
              }`}
            >
              <Link href="/blog">Articles</Link>
            </li>
            <li
              className={`nav__link ${
                router.pathname === "/about" ? "nav__link-active" : ""
              }`}
            >
              <Link href="/about">about us</Link>
            </li>
          </ul>

          {/* icons */}
          <div className="flex flex-row space-x-2">
            <Link href="/cart">
              <a className="relative cursor-pointer">
                <ShopingCart />
                <span className="absolute -top-2 -left-2 w-5 flex items-center justify-center	h-5 text-white text-xs rounded-full bg-red-600">
                  {cartItems.length}
                </span>
              </a>
            </Link>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setShowNavBar(!showNavBar)}>
              {showNavBar ? <XMark /> : <Bars />}
            </div>
          </div>
        </div>

        <ul className={`container flex flex-col px-4 md:hidden overflow-hidden duration-300	  ${
            showNavBar ? "h-72	" : "h-0"
          }`}
        >
          <li
            className={`nav__link ${
              router.pathname === "/" ? "nav__link-active" : ""
            }`}
          >
            <Link href="/">
              <a className="py-3 block" onClick={() => setShowNavBar(false)}>
                home
              </a>
            </Link>
          </li>
          <li
            className={`nav__link ${
              router.pathname === "/products" ? "nav__link-active" : ""
            }`}
          >
            <Link href="/products">
              <a className="py-3 block" onClick={() => setShowNavBar(false)}>
                products
              </a>
            </Link>
          </li>
          <li
            className={`nav__link ${
              router.pathname === "/services" ? "nav__link-active" : ""
            }`}
          >
            <Link href="/services">
              <a className="py-3 block" onClick={() => setShowNavBar(false)}>
                Services
              </a>
            </Link>
          </li>
          <li
            className={`nav__link ${
              router.pathname === "/blog" ? "nav__link-active" : ""
            }`}
          >
            <Link href="/blog">
              <a className="py-3 block" onClick={() => setShowNavBar(false)}>
                Articles
              </a>
            </Link>
          </li>
          <li
            className={`nav__link ${
              router.pathname === "/about" ? "nav__link-active" : ""
            }`}
          >
            <Link href="/about">
              <a className="py-3 block" onClick={() => setShowNavBar(false)}>
                about us
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default NavBar;
