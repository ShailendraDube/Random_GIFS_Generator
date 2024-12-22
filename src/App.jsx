import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(
    <div className="flex flex-col background overflow-x-hidden h-screen w-full relative items-center">

      <h1 className="bg-white w-11/12 rounded-lg text-center
      mt-[40px] py-2 text-4xl font-bold px-10">
      RANDOM GIFS
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>

      </div>

    </div>
  );
}
