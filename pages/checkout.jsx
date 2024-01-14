/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Row from "./../components/layout/Grid";
import Link from "next/link";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { FormInput, FormSelect } from "../components/element/Form";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { clearCart } from "../store/slice/cartSlice";
import { governorates,cities } from "../data";

function checkout() {
  const dispatch = useDispatch();
  const { cartItems, isLoading, error } = useSelector((state) => state.cart);
  const cartList = cartItems.map(({ id, productName,productId, quantity, price }) => {
    return (
      <li className="py-3  capitalize" key={id}>
        <div className="flex text-h5 justify-between">
          <Link href={`/product/${productId}`}>
          <a className="hover:text-primary">{productName}</a>

          </Link>
          <span>${quantity * price}</span>
        </div>
        <div className="text-p3 flex space-x-4 text-base">
          <span>qty: {quantity}</span>
          <span>price: ${price}</span>
        </div>
      </li>
    );
  });

  let totalPrice = cartItems.reduce((acc, product) => {
    return (acc += product.quantity * product.price);
  }, 0);

  const RegExp = {
    phone:
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    date: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
    cvc: /^[0-9]{3,3}$/,
    zipCode: /^[0-9]{5,5}$/,
    cardNumber: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm,
  };

  let schema = Yup.object({
    // user info
    firstName: Yup.string().min(3).max(15).required("Required"),
    lastName: Yup.string().min(3).max(15).required("Required"),
    email: Yup.string().email().required("Required"),
    phone: Yup.string()
      .matches(RegExp.phone, "Phone number is not valid")
      .required("Required"),
    // shipping info
    governorate: Yup.string().required("Required"),
    address: Yup.string().min(3).max(80).required("Required"),
    city: Yup.string().max(15).required("Required"),
    zipCode: Yup.string()
      .matches(RegExp.zipCode, "cvc number is not valid")
      .required("Required"),
    // paymen
    cardNumber: Yup.string()
      .matches(RegExp.cardNumber, "card number is not valid")
      .required("Required"),
    date: Yup.string()
      .matches(RegExp.date, "date number is not valid")
      .required("Required"),
    CVC: Yup.string()
      .matches(RegExp.cvc, "cvc number is not valid")
      .required("Required"),
  });

  const initialValues = {
    // user info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // shipping info
    governorate: "",
    address: "",
    city: "",
    zipCode: "",
    // paymen
    cardNumber: "8888000022225555",
    date: "05/20",
    CVC: "888",
  };

  const handelSubmit = (values, onSubmitProps) => {
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      dispatch(clearCart());
      toast.success("product is being sent", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }, 800);
  };

  const [gov, setGov] = useState([]);
  const [citys, setCitys] = useState([]);



  const getCitiesByIdGov =  (id) => {
    
    const data = cities.filter((item) => item.governorate_id == id)
    setCitys(data);

  };

  useEffect(() => {
    setGov(governorates);
  }, []);

  return (
    <>
      <Head>
      <title>Lalasia - checkout</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <div className="container min-h-[70vh] py-10">
        <Row className="gap-x-4 items-start">
          <div className="col-span-12 lg:col-span-7 shadow-sm  border p-4">
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handelSubmit}
            >
              {(props) => {
                return (
                  <Form>
                    <h4 className="text-h4 text-title capitalize my-2">
                      personal information
                    </h4>
                    <div className="grid grid-cols-2 gap-x-3">
                      <FormInput
                        name="firstName"
                        label="first Name"
                        placeholder="enter first name"
                        propsInput={props}
                      />
                      <FormInput
                        name="lastName"
                        label="last Name"
                        placeholder="enter last name"
                        propsInput={props}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-x-3">
                      <FormInput
                        name="email"
                        label="email"
                        placeholder="email@gmail.com"
                        propsInput={props}
                      />
                      <FormInput
                        name="phone"
                        label="phone"
                        placeholder="enter phone number"
                        propsInput={props}
                      />
                    </div>

                    <h4 className="text-h4 text-title capitalize mb-2 mt-5">
                      Shopping information
                    </h4>
                    <FormSelect
                      name="governorate"
                      label="governorate"
                      propsInput={props}
                      onClick={() => getCitiesByIdGov(props.values.governorate)}
                    >
                      <option>slecet governorate</option>
                      {gov.map((gov) => {
                        return (
                          <option key={gov.id} value={gov.id}>
                            {gov.governorate_name_en}
                          </option>
                        );
                      })}
                    </FormSelect>
                    <div className="grid grid-cols-3 gap-x-3">
                      <div className="col-span-2">
                        <FormSelect name="city" label="city" propsInput={props}>
                          <option>slecet city</option>
                          {citys.map((city) => {
                            return (
                              <option key={city.id} value={city.city_name_en}>
                                {city.city_name_en}
                              </option>
                            );
                          })}
                        </FormSelect>
                      </div>
                      <div className="col-span-1">
                        <FormInput
                          className="col-span-1"
                          name="zipCode"
                          placeholder="enter zip Code"
                          label="zip Code"
                          propsInput={props}
                        />
                      </div>
                    </div>
                    <FormInput
                      name="address"
                      label="address"
                      propsInput={props}
                    />

                    <h4 className="text-h4 text-title capitalize mb-2 mt-5">
                      payment information
                    </h4>
                    <FormInput
                      name="cardNumber"
                      label="card Number"
                      placeholder="example (0000 0000 0000 0000)"
                      propsInput={props}
                    />
                    <div className="grid grid-cols-3 gap-x-3">
                      <div className="col-span-2">
                        <FormInput
                          name="date"
                          label="expiration date"
                          placeholder="example (06/10)"
                          propsInput={props}
                        />
                      </div>
                      <div className="col-span-1">
                        <FormInput
                          name="CVC"
                          label="CVC"
                          placeholder="example (758)"
                          propsInput={props}
                        />
                      </div>
                    </div>
                    {cartItems.length === 0 ? (
                      <Link href="/products">
                        <a className="btn btn-secondary block w-full mt-4">
                          shoping now
                        </a>
                      </Link>
                    ) : (
                      <button
                        disabled={props.isSubmitting}
                        type="submite"
                        className="btn btn-primary w-full mt-4"
                      >
                        {props.isSubmitting ? "submiteing" : "order now"}
                      </button>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="col-span-12 lg:col-span-5 shadow-sm  border p-6">
            <ul className="flex flex-col divide-y">
              <h3 className="text-h4 capitalize mb-4">your product</h3>
              {isLoading && <p>loading..</p>}
              {cartItems.length === 0 ? (
                <p>
                  now product shopting now
                  <Link href="/products">
                    <a className="text-secondary">shoping now</a>
                  </Link>
                </p>
              ) : (
                cartList
              )}
            </ul>
            <ul className="flex flex-col divide-y mt-4">
              <h3 className="text-h4 capitalize mb-4">order summary</h3>
              <li className="py-3 text-h6 text-base  font-semibold capitalize flex justify-between ">
                <span>subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </li>
              <li className="py-3 text-h6 text-base  font-semibold capitalize flex justify-between ">
                <span>shiping estimate</span>
                <span>$5</span>
              </li>
              <li className="py-3 text-h6 capitalize flex justify-between ">
                <span>total order</span>
                <span>${(totalPrice + 5).toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </>
  );
}

export default checkout;
