import Row from "../layout/Grid";

function ServiceItems() {
  return (
    <section className="py-16">
      <div className="container">
        <Row>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-h2 sm:text-h1 text-primary">01</p>
            <h4 className="text-h4 sm:text-h3 py-3 capitalize">Furniture</h4>
            <p className="text-p3 sm:text-p2 text-base">
              At the ultimate smart home, you are met with technology before you
              even step through the front door.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-h2 sm:text-h1 text-primary">02</p>
            <h4 className="text-h4 sm:text-h3 py-3 capitalize">Home Decoration</h4>
            <p className="text-p3 sm:text-p2 text-base">
              Create A Calming Summer Escape With Our Luxurious Home Accessories
              For The Balmy Evenings.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-h2 sm:text-h1 text-primary">03</p>
            <h4 className="text-h4 sm:text-h3 py-3 capitalize">Kitchen Cabinet</h4>
            <p className="text-p3 sm:text-p2 text-base">
              Introducing the modular kitchen cabinet system. Start with our
              huge selection of base and wall cabinets.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-h2 sm:text-h1 text-primary">04</p>
            <h4 className="text-h4 sm:text-h3 py-3 capitalize">Interior Design</h4>
            <p className="text-p3 sm:text-p2 text-base">
              Innovative products often feature innovative designs that play
              with the patterns we are familiar.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-h2 sm:text-h1 text-primary">05</p>
            <h4 className="text-h4 sm:text-h3 py-3 capitalize">Exterior Design</h4>
            <p className="text-p3 sm:text-p2 text-base">
              These stylish and resilient products provide up-to-date options
              for roofing, siding, decking, and outdoor spaces.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-h2 sm:text-h1 text-primary">06</p>
            <h4 className="text-h4 sm:text-h3 py-3 capitalize">Custom Furniture</h4>
            <p className="text-p3 sm:text-p2 text-base">
              With Quality Materials and Modern Designs, we have Designs for all
              Tastes. we bring you World Class Designs.
            </p>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default ServiceItems;
