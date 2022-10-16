import Image from "next/image";
import Link from 'next/link';

function WorkCard({image}) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        layout='fill'
        objectFit='cover'
        alt="arrow"
      />
      <div className="absolute inset-0	z-40 bg-black  opacity-50	"></div>
      <div className="absolute z-50 bottom-6 left-6">
        <h4 className="text-h3 text-white">
          Siska Kohl’s Bedroom
        </h4>
        <p className="text-base text-p3">We start renovating her bedroom with minimalist</p>
        <Link href="#">
          <a href="#" className="text-p3 text-white">see detail </a>
        </Link>
      </div>
    </div>
  );
}

export default WorkCard;
