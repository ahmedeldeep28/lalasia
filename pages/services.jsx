import Head from "next/head";
import Row from "../components/layout/Grid";
import ServiceItems from "./../components/section/Services";
import WorkCard from "./../components/cards/WorkCard";
import Hero from "./../components/section/Hero";
import HeadSection from "./../components/element/HeadSection";

function services() {
  return (
    <>
      <Head>
      <title>Lalasia - Services</title>
        <meta
          name="description"
          content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        />
      </Head>
      <Hero
        img="/services.png"
        title="services"
        text="We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item"
      />

      <ServiceItems />

      <section className="py-16">
        <div className="container">
          <HeadSection
            name="Portofolio"
            title="Amazing Project We’ve Done Before"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
            center={false}
          />
          <Row className="grid-rows-3 md:grid-rows-2  h-[800px] md:h-[600px]">
            <div className="col-span-12 md:col-span-5 row-span-1 md:row-span-2">
              <WorkCard image="/product.png" />
            </div>
            <div className="col-span-12 md:col-span-7  row-span-1 md:row-span-1">
              <WorkCard image="/product 1.png" />
            </div>
            <div className="col-span-12 md:col-span-7 row-span-1 md:row-span-1">
              <WorkCard image="/product 2.png" />
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default services;
