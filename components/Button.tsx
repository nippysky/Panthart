import Link from "next/link";

export default function Button(props: { link: string; children: any }) {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className="flex cursor-pointer font-semibold bg-gradient-to-r from-royalGrad1 via-royalGrad3 to-royalGrad3 dark:from-goldenGrad1 dark:via-goldenGrad3 dark:to-goldenGrad3 text-gradient text-[1.2rem]">
        {children}
      </a>
    </Link>
  );
}
