import Image from "next/image";
import Link from "next/link";

function BlogCard({articleData}) {
  const {id,title,desc,image,date,category} = articleData
  return (
    <div>
      <Image
        width={600}
        height={400}
        layout="responsive"
        src={`/${image}`}
        placeholder="blur"
        blurDataURL={`/${image}`}
        alt="blog card"
      />
      <div className="body">
        <div className="flex justify-between pt-3 pb-2">
          <p className="text-p3 sm:text-p2 text-base capitalize">
            {category}
          </p>
          <p className="text-p3 sm:text-p2 text-base capitalize">
            {date}
          </p>
        </div>
        <Link href={`/blog/${id}`}>
          <h3 className="text-h5 sm:text-h3 mb-2 capitalize text-title transition cursor-pointer hover:text-primary">
            {title}
          </h3>
        </Link>

        <p className="text-p4 sm:text-p3 text-base capitalize">
          {desc.substring(0,110)}
   
        </p>
      </div>
    </div>
  );
}

export default BlogCard;




