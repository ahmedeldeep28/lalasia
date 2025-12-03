import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { TeamItem } from "@/types";

type TeamCardProps = {
  member: TeamItem;
};
function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="space-y-1">
      <div className="relative overflow-hidden  aspect-square">
        <Image
          fill
          src={member.image}
          alt={`${member.name} member`}
          className="transition-transform hover:scale-105"
        />
      </div>
      <Heading variant="h4">{member.name}</Heading>
      <Text variant="sm" color="muted">
        {member.job}
      </Text>
    </div>
  );
}

export default TeamCard;
