/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import Head from "next/head";
import Row from "./../components/layout/Grid";
import CartCard from "../components/cards/CartCard";
import { useSelector ,useDispatch} from "react-redux";
import { clearCart } from "../store/slice/cartSlice";
import { toast } from 'react-toastify';

function cart() {
  const dispatch = useDispatch()
  const { cartItems, isLoading, error } = useSelector((state) => state.cart);
  const cartList = cartItems.map((item) => {
    return <CartCard itemData={item} key={item.id} />;
  });

  let totalPrice = cartItems.reduce((acc,product)=>{
    return (acc += product.quantity * product.price )
  },0)

  const emptyCart = () => {
    dispatch(clearCart()).unwrap()
    .then(() => {
        toast.success("empty cart successfully", {position: toast.POSITION.BOTTOM_RIGHT});
      })
      .catch(() => {
        toast.error("empty cart error ", {position: toast.POSITION.BOTTOM_RIGHT});
      })
  }




  return (
    <>
      <Head>
      <title>Lalasia - Shoping Cart</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <section className="py-8">
        <div className="container">
          <h2 className="text-h3 sm:text-h2 text-title capitalize">
            shopeing cart
          </h2>

          <Row className="gap-x-6 mt-5">
            <div className="col-span-12 lg:col-span-8">
              {isLoading && <p>loading...</p>}
              {error ? <p>{error}</p> : 
                cartItems.length === 0 
                ? <p className="text-yellow-900 text-h5 p-5 bg-yellow-200 rounded">cart empty</p>
                : cartList
                            
              }

            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="p-5 border shadow-sm">
                <h3 className="text-h4 capitalize">order summary</h3>
                <ul className="flex flex-col divide-y mt-4">
                  <li className="py-3 text-h6 text-base  font-semibold capitalize flex justify-between ">
                    <span className="">subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </li>
                  <li className="py-3 text-h6 text-base  font-semibold capitalize flex justify-between ">
                    <span className="">shiping estimate</span>
                    <span>$5</span>
                  </li>
                  <li className="py-3 text-h6 capitalize flex justify-between ">
                    <span className="">total order</span>
                    <span>${(totalPrice + 5).toFixed(2)}</span>
                  </li>
                </ul>
                {cartItems.length === 0 
                ?
                <Link href="/products">
                <a className="btn btn-secondary block w-full mt-4">
                  shoping now
                </a>
                </Link>
                 :
                 <>
                 <Link href="/checkout">
                 <a className="btn btn-secondary block w-full mt-4">
                   checkout
                 </a>
                 </Link>
                 <button className="btn btn-light w-full mt-4" onClick={emptyCart}>clear all</button>
                 </>
                }

                
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default cart;

