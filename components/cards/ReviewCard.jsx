import Image from "next/image";

function ReviewCard() {
  return (
    <div className="bg-white p-5 shadow">
      <Image
        width="40px"
        height="40px"
        src="/icons/quote-up.png"
        alt="search"
      />
      <p className="text-p2 my-4">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non.{" "}
      </p>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <Image
            className="rounded-full"
            width="50px"
            height="50px"
            src="/team.png"
            alt="team"
          />
          <h4 className="text-h4 ml-2">ahmed esam</h4>
        </div>
        <div className="flex items-center">
          <Image
            className="rounded-full"
            width="24px"
            height="24px"
            src="/icons/star.png"
            alt="star"
          />
          <h4 className="text-h4 ml-2">4.8</h4>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
