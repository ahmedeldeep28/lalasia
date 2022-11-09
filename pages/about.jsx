import Image from "next/image";
import Head from "next/head";
import Hero from "./../components/section/Hero";
import Row from "./../components/layout/Grid";
import HeadSection from "./../components/element/HeadSection";
import TeamCard from "./../components/cards/TeamCard";
import { fetchApi } from "../hooks/useApi";
import { team } from './../data';

function about({ teamData, error }) {
  const teamList = teamData.map((memeber) => {
    return (
      <div className="col-span-12 md:col-span-6 lg:col-span-4" key={memeber._id}>
        <TeamCard memeberData={memeber} />
      </div>
    );
  });

  return (
    <>
          <Head>
          <title>Lalasia - About Us</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <Hero
        img="/Article.png"
        title="about us"
        text="We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item"
      />

      <section className="py-16">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-y-10">
            <div className="w-full lg:w-2/5">
              <p className="text-h6 sm:text-h5 text-secondary mb-2">
                Our Mission
              </p>
              <h2 className="text-h3 sm:text-h2 text-title">
                Our team dedicated to help find smart home product
              </h2>
              <div className="flex justify-between mt-8">
                <div>
                  <h2 className="text-h3 sm:text-h2 text-title">20+</h2>
                  <p className="text-p3x sm:text-p2 text-base">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h2 className="text-h3 sm:text-h2 text-title">483+</h2>
                  <p className="text-p3 sm:text-p2 text-base">Happy Client</p>
                </div>
                <div>
                  <h2 className="text-h3 sm:text-h2 text-title">150+</h2>
                  <p className="text-p3 sm:text-p2 text-base">
                    Project Finished
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full	lg:w-2/5">
              <div className="flex space-x-5 items-start mb-4">
                <div className="w-14 h-14 rounded-full bg-light flex justify-center items-center flex-none">
                  <Image
                    width="30px"
                    height="30px"
                    src="/icons/3square.png"
                    alt="product card"
                  />
                </div>
                <div>
                  <h4 className="text-h3 text-title mb-1">24/7 Supports</h4>
                  <p className="text-p3 sm:text-p3 text-base">
                    Project 24/7 support means a support service that is
                    provided 24 hours a day and 7 days a week. Finished
                  </p>
                </div>
              </div>
              <div className="flex space-x-5 items-start mb-4">
                <div className="w-14 h-14 rounded-full bg-light p-2 flex justify-center items-center flex-none">
                  <Image
                    width="30px"
                    height="30px"
                    src="/icons/3square.png"
                    alt="product card"
                  />
                </div>
                <div>
                  <h4 className="text-h3 text-title mb-1">24/7 Supports</h4>
                  <p className="text-p3 sm:text-p3 text-base">
                    Project 24/7 support means a support service that is
                    provided 24 hours a day and 7 days a week. Finished
                  </p>
                </div>
              </div>
              <div className="flex space-x-5 items-start">
                <div className="w-14 h-14 rounded-full bg-light p-2 flex justify-center items-center flex-none">
                  <Image
                    width="30px"
                    height="30px"
                    src="/icons/3square.png"
                    alt="product card"
                  />
                </div>
                <div>
                  <h4 className="text-h3 text-title mb-1">24/7 Supports</h4>
                  <p className="text-p3 sm:text-p3 text-base">
                    Project 24/7 support means a support service that is
                    provided 24 hours a day and 7 days a week. Finished
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <HeadSection
            name="Our Team"
            title="Meet our leading and strong team"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
            center={false}
          />
          {error ? (
            <p className="text-red-500 text-h5 p-5 bg-red-100 rounded">
              {error}
            </p>
          ) : (
            <>
              {team.length === 0 ? (
                <p className="text-red-500 text-h5 p-5 bg-red-100 rounded">
                  search not found
                </p>
              ) : (
                <Row className="gap-y-6 gap-x-4">{teamList}</Row>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default about;

export  function getStaticProps() {
  try {
    const teamData = team
    return {
      props: {
        teamData,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        teamData: [],
        error,
      },
    };
  }
}
