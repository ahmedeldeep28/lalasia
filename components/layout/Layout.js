import {useEffect} from 'react'
import Head from 'next/head'
import NavBar from "./NavBar"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
    return (
    <>
        <ToastContainer />
        <Head>
            <title>home</title>
        </Head>
        <NavBar />
        {children}
        <Footer />

    </>
    )
}

export default Layout