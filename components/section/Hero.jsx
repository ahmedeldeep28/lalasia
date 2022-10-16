import Image from "next/image";

function Hero({img,title,text}) {
  return (
    <section className="py-16">
        <div className="container">
            <div className="w-full lg:w-1/2  text-center mx-auto mb-12">
                <h4 className="text-h2 sm:text-h1 capitalize">{title}</h4>
                <p className="text-p3 md:text-p1 text-base">{text}</p>
            </div>
            <Image
                src={img}
                width={900}
                height={390}
                layout="responsive"
                objectFit="cover"
                alt="arrow"
            />
        </div>
  </section>
  )
}

export default Hero