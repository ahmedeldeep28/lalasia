import Image from "next/image";
import HeadSection from "../element/HeadSection";
import Row from "../layout/Grid";

function Benefits() {
  return (
    <section className="benefits py-16">
      <div className="container">
        <HeadSection 
            name="Benefits"
            title="Benefits when using our services"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
            center={false}
        />

        <Row>
        <div className="col-span-12 md:col-span-4">
            <div className="bg-white transition duration-300 border border-gray-100   hover:shadow-md hover:-translate-y-2 rounded  p-5">
              <div className="w-16	h-16 rounded-full bg-light p-3">
                <Image
                  width="60px"
                  height="60px"
                  src="/icons/3square.png"
                  placeholder="blur"
                  blurDataURL="/product.png"
                  alt="product card"
                />
              </div>
              <h4 className="text-h5 md:text-h3 py-3 capitalize">Many Choices</h4>
              <p className="text-p3 md:text-p1 text-base">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
          <div className="bg-white transition duration-300 border border-gray-100   hover:shadow-md hover:-translate-y-2 rounded  p-5">
              <div className="w-16	h-16 rounded-full bg-light p-3">
                <Image
                  width="60px"
                  height="60px"
                  src="/icons/calendar-tick.png"
                  placeholder="blur"
                  blurDataURL="/product.png"
                  alt="product card"
                />
              </div>
              <h4 className="text-h5 md:text-h3 py-3 capitalize">Fast and On Time</h4>
              <p className="text-p3 md:text-p1 text-base">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
          <div className="bg-white transition duration-300  border border-gray-100 hover:shadow-md hover:-translate-y-2 rounded  p-5">
              <div className="w-16	h-16 rounded-full bg-light p-3">
                <Image
                  width="60px"
                  height="60px"
                  src="/icons/money-tick.png"
                  placeholder="blur"
                  blurDataURL="/product.png"
                  alt="product card"
                />
              </div>
              <h4 className="text-h5 md:text-h3 py-3 capitalize">Affordable Price</h4>
              <p className="text-p3 md:text-p1 text-base">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default Benefits;
