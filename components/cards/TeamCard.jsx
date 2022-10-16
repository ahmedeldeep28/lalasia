import Image from "next/image";

function TeamCard({memeberData}) {
  const {image,name,job} = memeberData
  return (
    <div className="overflow-hidden">
        <Image
          width={600}
          height={600}
          layout="responsive"
          src={`/team/${image}`}
          placeholder="blur"
          blurDataURL={`/team/${image}`}
          alt="team card"
        />
      <h3 className="text-h5 md:text-h3 capitalize mt-3 mb-1">{name}</h3>
      <p className="text-p4 md:text-p3 text-base capitalize">{job}</p>
    </div>
  );
}

export default TeamCard;
