import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="flex flex-col mb-3 gap-4 items-center">
      <h1 className="text-3xl text-center font-bold pt-4 ">Mini WIkki</h1>
      <Searchbar />
    </div>
  );
}
