import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

interface Result {
  pageid: number;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

interface ItemProps {
  result: Result;
}

export default function Item({ result }: ItemProps) {
  const itemText = (
    <div className="">
      <h1 className="text-3xl font-bold mt-2 hover:underline">
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="flex gap-1 items-center"
        >
          {result.title} <ArrowRightCircle />
        </Link>
      </h1>
      <p>{result.extract}</p>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="shadow-md rounded-lg overflow-hidden border m-2 p-2">
      <div className="flex flex-col">
        <div className="relative w-full ">
          <Image
            src={result.thumbnail.source}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            alt="image"
            priority
          />
        </div>
        {itemText}
      </div>
    </article>
  ) : (
    <article className="shadow-md rounded-lg overflow-hidden border m-2 p-2">
      {itemText}
    </article>
  );

  return <div>{content}</div>;
}
