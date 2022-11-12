import Image from "next/image";

function DoCard(props: { image: any; heading: any; text: any }) {
  const { image, heading, text } = props;
  return (
    <div className="flex w-full gap-10 mb-20">
      <div className="w-[10%]">
        <Image
          src={image}
          alt={heading}
          width={40}
          height={40}
          priority
          quality={100}
        />
      </div>
      <div className="w-[90%]">
        <h4 className="text-black dark:text-white font-bold mb-3 text-[1.2rem]">
          {heading}
        </h4>
        <p className="text-black dark:text-white text-[1rem] leading-7">
          {text}
        </p>
      </div>
    </div>
  );
}

export default DoCard;
