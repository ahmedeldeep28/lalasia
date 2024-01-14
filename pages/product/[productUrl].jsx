import Image from "next/image";
import Head from "next/head";
import Row from "../../components/layout/Grid";
import { useDispatch } from "react-redux";
import { addToCart, getCart } from "../../store/slice/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import axiosApi from "../../api/axios-global";

function ProductDetail({ product }) {
  const { id, title, image, desc, price, materal, color } = product;

  const dispatch = useDispatch();
  const [loadAddCart, setLoadAddCart] = useState(false);
  const [productData, setProductData] = useState({
    id: "",
    productId: id,
    productName: title,
    quantity: 1,
    color: color[0],
    image,
    price,
  });

  const addProductToCart = async () => {
    setLoadAddCart(true);
    if (productData.color.length === 0) {
      toast.error("please select product color", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setLoadAddCart(false);
      return;
    }
    dispatch(addToCart(productData))
      .unwrap()
      .then((data) => {
        toast.success("Product added successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
      })
      .finally(() => {
        dispatch(getCart());
        setLoadAddCart(false);
      });
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <section className="py-16">
        <div className="container">
          <Row className="gap-x-8">
            <div className="col-span-12 lg:col-span-6">
              <Image
                width={900}
                height={800}
                src={`/products/${image}`}
                alt="product card"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-h3 sm:text-h2 text-title">{title}</h1>
              <p className="text-p3 md:text-p2 text-base mb-4">{materal}</p>
              <h5 className="text-h5 font-medium mb-1">Description</h5>
              <p className="text-p4 md:text-p3 text-base mb-4">{desc}</p>
              <h5 className="text-h5 font-medium mb-1">Color</h5>
              <ul className="flex space-x-2">
                {color.map((colorItem) => (
                  <input
                    type="radio"
                    key={colorItem}
                    className={`form-radio w-7 h-7 ${colorItem}`}
                    name="color"
                    value={colorItem}
                    defaultChecked={productData.color === colorItem}
                    onChange={(e) =>
                      setProductData({ ...productData, color: e.target.value })
                    }
                  />
                ))}
              </ul>
              <h3 className="text-h2 font-medium text-title my-9">${price}</h3>
              <button
                disabled={loadAddCart || !productData.color}
                className="btn btn-primary"
                onClick={addProductToCart}
              >
                {loadAddCart ? "add to Cart..." : "add to cart"}
              </button>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;

export async function getServerSideProps({ params }) {
  const { productUrl } = params;
  const { product } = await axiosApi.get(`/product/${productUrl}`);
  return {
    props: {
      product,
    },
  };
}
