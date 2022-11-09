import Head from "next/head";
import Hero from "./../components/section/Hero";
import ProductCard from "./../components/cards/ProductCard";
import Row from "./../components/layout/Grid";
import InputSearch from "./../components/element/InputSearch";
import { fetchApi } from "../hooks/useApi";

function products({ products, error }) {
  const productList = products.map((product) => {
    return (
      <div className="col-span-12 md:col-span-6 lg:col-span-4" key={product.id}>
        <ProductCard productData={product} />
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Lalasia - Products</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <Hero
        img="/products.png"
        title="products "
        text="We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item"
      />
      <div className="container">
        <InputSearch />
      </div>

      <section className="py-10">
        <div className="container">
          <h2 className="text-h2 text-title mb-8">Total Product</h2>
          {error ? (
            <p className="text-red-500 text-h5 p-5 bg-red-100 rounded">
              {error}
            </p>
          ) : (
            <>
              {products.length === 0 ? (
                <p className="text-red-500 text-h5 p-5 bg-red-100 rounded">
                  search not found
                </p>
              ) : (
                <Row className="gap-y-6 gap-x-4">{productList}</Row>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default products;

export async function getServerSideProps({ query }) {
  try {
    const { term } = query;

    let { products } = await fetchApi(
      `products${term ? `?title=${term}` : ""}`
    );

    return {
      props: {
        products,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
        error: "A server error occurred",
      },
    };
  }
}
