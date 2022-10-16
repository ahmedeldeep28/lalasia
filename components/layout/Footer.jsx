import React from "react";
import Row from "./Grid";
import Link from "next/link";
import Logo from "../element/Logo";

function Footer() {
  return (
    <footer>
      <div className="container border-t py-16">
        <Row className="justify-between">
          <div className="col-span-12 md:col-span-6 mb-4">
            <Logo />
            <p className="text-p3 pr-0  md:pr-48 ">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </p>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-h4">Product</h4>
            <ul className="flex flex-col gap-y-1 mt-3">
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">New Arrivals</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">Best Selling</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">Home Decor</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">Kitchen Set</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-h4">Services</h4>
            <ul className="flex flex-col gap-y-1 mt-3">
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">Product</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">Services</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">blog</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">about us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-h4">Follow us</h4>
            <ul className="flex flex-col gap-y-1 mt-3">
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">facebook</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">twitter</Link>
              </li>
              <li className="capitalize text-p3 sm:text-p2 font-medium hover:text-primary">
                <Link href="/">instgram</Link>
              </li> 
            </ul>
          </div>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
