import Image from "next/image";
import Link from "next/link";

function ProductCard({productData}) {
  const {id,title,url,price,image,materal,category,color} = productData
  return (
    <div>
      <Image
        width={600}
        height={550}
        layout="responsive"
        src={`/products/${image}`}
        placeholder="blur"
        blurDataURL={`/products/${image}`}
        alt="product card"
      />
      <div className="flex justify-between items-center my-3">
        <p className="text-p3 sm:text-p2 text-base capitalize font-light sm:font-light">{category}</p>

        <p className="text-p3 sm:text-p2 text-base capitalize font-light sm:font-light">{color.length} colors</p>
      </div>
      <Link href={`/product/${url}`}>
        <h3 className="text-h4 sm:text-h3 text-title capitalize  transition cursor-pointer hover:text-primary">
          {title}
        </h3>
      </Link>
      <p className="text-p3 sm:text-p2 mb-3 mt-1 text-base">{materal}</p>
      <p className="text-h4 sm:text-h3  text-title">${price}</p>
    </div>
  );
}

export default ProductCard;
