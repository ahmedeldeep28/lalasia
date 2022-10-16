/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { FormInput, FormCheckBox } from "../components/element/Form";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { createAcount } from "../store/slice/userSlice";
import { toast } from "react-toastify";

function signup() {
  const dispatch = useDispatch();
  const {isUser} = useSelector((state) => state.user)
  const router = useRouter();

  let schema = Yup.object({
    firstName: Yup.string().min(3).max(15).required("Required"),
    lastName: Yup.string().min(3).max(15).required("Required"),
    email: Yup.string().email().required("Required"),
    phone: Yup.string().min(11).max(18).required("Required"),
    password: Yup.string().min(8).max(25).required("Required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    secret: "",
  };

  const handelSubmit = (values, onSubmitProps) => {
    values.secret = `${Math.random() * 10}`;
    dispatch(createAcount(values))
      .unwrap()
      .then(() => {
        router.push("/");
        toast.success("Account creation succeeded", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
      })
      .finally(() => {
        {
          onSubmitProps.resetForm();
          onSubmitProps.setSubmitting(false);
        }
      });
  };



  return (
    <>
      <Head>
      <title>Lalasia - Sigin up</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <div className="container py-14 min-h-[70vh] flex flex-col justify-center items-center">
        <div className="w-full md:w-5/6 lg:w-1/2 shadow-sm  border p-6">
          <h3 className="text-h3  capitalize text-cente">create acount now</h3>
          <p className="text-p3 text-base">
            do you have an account
            <Link href="/login">
              <a className="text-secondary"> login</a>
            </Link>
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handelSubmit}
          >
            {(props) => {
              return (
                <Form className="mt-4">
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
                  <FormInput
                    type="email"
                    name="email"
                    label="email"
                    placeholder="enter email"
                    propsInput={props}
                  />
                  <FormInput
                    type="text"
                    name="phone"
                    label="phone"
                    placeholder="enter phone"
                    propsInput={props}
                  />
                  <FormInput
                    type="password"
                    name="password"
                    label="password"
                    placeholder="enter password"
                    propsInput={props}
                  />

                  <FormCheckBox
                    name="remember-me"
                    label="remember me"
                    propsInput={props}
                  />

                  <button
                    disabled={props.isSubmitting}
                    type="submite"
                    className="btn-md btn-primary w-full"
                  >
                    {props.isSubmitting ? "submiteing" : "sign in"}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default signup;
