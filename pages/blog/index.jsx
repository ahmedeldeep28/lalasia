import Link from "next/link";
import Head from "next/head";
import Row from "../../components/layout/Grid";
import BlogCard from "../../components/cards/BlogCard";
import Hero from "../../components/section/Hero";
import { fetchApi } from "../../hooks/useApi";

function blogs({ articles, error }) {
  const articlesList = articles.map((article) => {
    return (
      <div className="col-span-12 md:col-span-6 lg:col-span-4" key={article._id}>
        <BlogCard articleData={article} />
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Lalasia - Articles</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <Hero
        img="/Article.png"
        title="Articles"
        text="We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item"
      />

      <section className="py-16">
        <div className="container">
          <div className="mb-4">
            <p className="text-h6 sm:text-h5 text-secondary mb-2">
              Trending Topics
            </p>
            <h2 className="text-h3 sm:text-h2 text-title">Popular last week</h2>
          </div>
          <ul className="flex space-x-4 mb-4 overflow-auto	py-3">
            <li className="text-p2 sm:text-p1 text-title whitespace-nowrap duration-300 cursor-pointer">
              <Link href="/blog">all</Link>
            </li>
            <li className="text-p2 sm:text-p1 text-base whitespace-nowrap duration-300 hover:text-title cursor-pointer">
              <Link href="/blog?category=tips and trick">Tips and Trick</Link>
            </li>
            <li className="text-p2 sm:text-p1 text-base whitespace-nowrap duration-300 hover:text-title cursor-pointer">
              <Link href="/blog?category=interior design">Interior Design</Link>
            </li>
            <li className="text-p2 sm:text-p1 text-base whitespace-nowrap duration-300 hover:text-title cursor-pointer">
              <Link href="/blog?category=design inspiration">
                Design Inspiration
              </Link>
            </li>
            <li className="text-p2 sm:text-p1 text-base whitespace-nowrap duration-300 hover:text-title cursor-pointer">
              <Link href="/blog?category=color guide">Color Guide</Link>
            </li>
          </ul>
          {error ? (
            <p className="text-red-500 text-h5 p-5 bg-red-100 rounded">
              {error}
            </p>
          ) : (
            <>
              {articles.length === 0 ? (
                <p className="text-red-500 text-h5 p-5 bg-red-100 rounded">
                  not found articles
                </p>
              ) : (
                <Row className="gap-y-5">{articlesList}</Row>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default blogs;

export async function getServerSideProps({ query }) {
  try {
    const category = query.category || null;
    let { articles } = await fetchApi(`articles${category ? `/${category}` : ""}`
    );

    return {
      props: {
        articles,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        articles: [],
        error: error,
      },
    };
  }
}
