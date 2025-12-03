import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

interface HeroSectionProps {
  title: string;
  text: string;
  image: string;
  children?: React.ReactNode;
}

export const HeroSection = ({
  title,
  text,
  image,
  children,
}: HeroSectionProps) => {
  return (
    <section className="hero py-14">
      <div className="container relative">
        <span className="absolute top-0 left-0 -z-10">
          <Image
            src="/icons/Arrow.png"
            width={200}
            height={200}
            alt="arrow"
            className="max-w-none"
          />
        </span>

        <div className="text-center m-auto w-full lg:w-4/5">
          <Heading as="h1" variant="h1" className="mb-3 capitalize">
            {title}
          </Heading>

          <Text variant="lg" color="muted" className=" mx-auto">
            {text}
          </Text>
        </div>

        <div className="relative mt-28 lg:mt-16 w-full h-4/5">
          {children && (
            <div className="absolute z-40 w-full lg:w-4/5 inset-x-1/2 -top-24 lg:-top-8 -translate-x-1/2">
              {children}
            </div>
          )}

          <div className="relative w-full  aspect-video">
            <Image
              src={image}
              fill
              className="object-cover"
              alt={title}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
