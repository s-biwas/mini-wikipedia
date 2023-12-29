import getWikiResult from "@/lib/getWiki";
import Item from "./components/Item";

interface PageProps {
  params: {
    search: string;
  };
}

const page = async ({ params }: PageProps) => {
  const search = params.search;
  const wikiData = getWikiResult(search);
  const data = await wikiData;
  const result = data?.query?.pages;

  return (
    <main className="mx-auto max-w-lg py-1 min-h-screen">
      {result ? (
        Object.values(result).map((res: any) => {
          return <Item result={res} key={res.pageid} />;
        })
      ) : (
        <h2 className="p-2">{`${search} is Not Found`}</h2>
      )}
    </main>
  );
};

export default page;
