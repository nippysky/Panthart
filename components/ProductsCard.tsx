import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Prop {
  link: string;
  image: any;
  name: string;
}

export default function ProductsCard({ link, image, name }: Prop) {
  return (
    <Link href={link}>
      <a target="_blank" rel="noreferrer">
        <div className="w-full flex flex-col justify-center items-center cursor-pointer bg-mainBG dark:bg-darkBG py-5 px-5 rounded-lg">
          <div>
            <Image
              src={image}
              alt={"Comrades Icon"}
              width={85}
              height={85}
              priority
              quality={100}
            />
          </div>

          <p className="text-royal dark:text-gold font-semibold my-5 text-center">
            {name}
          </p>
        </div>
      </a>
    </Link>
  );
}
