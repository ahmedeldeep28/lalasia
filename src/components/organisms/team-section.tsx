import TeamCard from "../molecules/team-card";
import { SectionHeader } from "../templates/section-header";

export default function TeamSection() {
  return (
    <div>
      <section className="py-16">
        <div className="container">
          <SectionHeader
            name="Our Team"
            title="Meet our leading and strong team"
            description="Behind every piece is a team of skilled designers and craftsmen. We combine creativity and experience to deliver furniture that balances style and practicality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamCard
              member={{
                name: "Jesse Depp",
                image: "/team/team (1).png",
                job: "Founder & CEO",
              }}
            />
            <TeamCard
              member={{
                name: "Andrew Taggar",
                image: "/team/team (2).png",
                job: "Senior Designer",
              }}
            />
            <TeamCard
              member={{
                name: "Grace Marie",
                image: "/team/team (3).png",
                job: "manager",
              }}
            />
            <TeamCard
              member={{
                name: "Margareth Carter",
                image: "/team/team (4).png",
                job: "Marketer",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
