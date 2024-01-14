import Image from "next/image";
import Head from "next/head";
import axiosApi from "../../api/axios-global";

function Article({ article }) {
  const { id, title, desc, image, date, content } = article;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <div className="container my-5">
        <Image
          width={900}
          height={500}
          layout="responsive"
          src={`/${image}`}
          placeholder="blur"
          blurDataURL={`/${image}`}
          alt="blog card"
        />
        <h1 className="text-h3 sm:text-h2 my-3 capitalize text-title ">
          {title}
        </h1>
        <p className="text-p2 sm:text-p1 text-base capitalize mb-3">
          date: {date}
        </p>
        <p className="text-p2 sm:text-p1 text-base capitalize mb-3">{desc}</p>
        <p className="text-p2 sm:text-p1 capitalize">{content}</p>
      </div>
    </>
  );
}

export default Article;

export async function getStaticPaths() {
  const { articles } = await axiosApi.get(`/articles`);
  const paths = articles.map((article) => {
    return { params: { articleUrl: article.url } };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { articleUrl } = params;
  const { article } = await axiosApi.get(`/article/${articleUrl}`);
  return {
    props: {
      article,
    },
    revalidate: 10,
  };
}
