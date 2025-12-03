import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="bg-white gap-0 transition duration-300 border hover:shadow-md hover:-translate-y-2 p-5 h-full">
      <div className="w-16 h-16 rounded-full bg-muted p-3">
        <Image
          width={60}
          height={60}
          src={icon}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <Heading as="h3" variant="h4" className="py-3 capitalize">
        {title}
      </Heading>

      <Text variant="md" color="muted">
        {description}
      </Text>
    </Card>
  );
};
