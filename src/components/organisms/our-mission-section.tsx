import { Heading } from "../ui/heading";
import { StateNumber } from "../molecules/state-number";
import Image from "next/image";
import { Text } from "../ui/text";

export default function OurMissionSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between flex-wrap gap-y-10">
          <div className="w-full lg:w-2/5 space-y-3">
            <Heading variant="h6" color="secondary">
              Our Mission
            </Heading>
            <Heading variant="h2">
              Our team dedicated to help find smart home product
            </Heading>
            <div className="flex flex-wrap justify-between mt-8">
              <StateNumber label="Years Experience" value="20+" />
              <StateNumber label="Happy Clients" value="483+" />
              <StateNumber label="Project Finished" value="150+" />
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="flex space-x-5 items-start mb-4">
              <div className="size-14 rounded-full bg-muted flex justify-center items-center shrink-0">
                <Image
                  width={30}
                  height={30}
                  src="/icons/3square.png"
                  alt="product card"
                />
              </div>
              <div>
                <Heading variant="h4" className="mb-1">
                  24/7 Supports
                </Heading>
                <Text variant="sm">
                  Always available to assist you and keep your operations
                  running smoothly. txt Copy code
                </Text>
              </div>
            </div>
            <div className="flex space-x-5 items-start mb-4">
              <div className="size-14 rounded-full bg-muted p-2 flex justify-center items-center shrink-0">
                <Image
                  width={30}
                  height={30}
                  src="/icons/3square.png"
                  alt="product card"
                />
              </div>
              <div>
                <Heading variant="h4" className="mb-1">
                  High Quality
                </Heading>
                <Text variant="sm">
                  We deliver dependable and scalable solutions you can trust.
                  txt Copy code
                </Text>
              </div>
            </div>
            <div className="flex space-x-5 items-start">
              <div className="size-14 rounded-full bg-muted p-2 flex justify-center items-center shrink-0">
                <Image
                  height={30}
                  width={30}
                  src="/icons/3square.png"
                  alt="product card"
                />
              </div>
              <div>
                <Heading variant="h4" className="mb-1">
                  Customer Focused
                </Heading>
                <Text variant="sm">
                  Your success drives everything we build.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
