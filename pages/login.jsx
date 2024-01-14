/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { FormInput, FormCheckBox } from "../components/element/Form";
import * as Yup from "yup";
import { loginAcounte } from '../store/slice/userSlice';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function login() {

  const dispatch = useDispatch();
  const router = useRouter();

  let schema = Yup.object({
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or less")
      .max(25, "Must be 25 characters or less")
      .required("Required")

  });


  const initialValues = {
    email: "",
    password: "",
  };


  const handelSubmit = (values, onSubmitProps) => {
    dispatch(loginAcounte(values)).unwrap()
      .then((data) => {
        router.push("/")
        toast.success("Account creation succeeded", { position: toast.POSITION.BOTTOM_RIGHT });
      })
      .catch((error) => {
        toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
      })
      .finally(() => {
        {
          onSubmitProps.resetForm();
          onSubmitProps.setSubmitting(false);
        }
      })
  };


  return (
    <>
      <Head>
        <title>Lalasia - Login</title>
        <meta name="description" content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item" />
      </Head>
      <div className="container min-h-[70vh] flex flex-col justify-center items-center">
        <div className="w-full md:w-5/6 lg:w-1/2 shadow-sm  border p-6">
          <h3 className="text-h3 capitalize text-cente">sign in to your acount</h3>
          <p className="text-p3 text-base">I dont have an account
            <Link href="/signup"><a className="text-secondary" > create acount</a></Link>
          </p>
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handelSubmit}>
            {(props) => {
              return (
                <Form className="mt-4">
                  <FormInput
                    name="email"
                    label="email"
                    type="email"
                    propsInput={props}
                  />
                  <FormInput
                    name="password"
                    label="password"
                    type="password"
                    propsInput={props}
                  />
                  <FormCheckBox
                    name="remember-me"
                    label="remember me"
                    propsInput={props}
                  />

                  <button disabled={props.isSubmitting} type="submite" className="btn-md btn-primary w-full">
                    {props.isSubmitting ? "submiteing" : "login"}
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

export default login;
