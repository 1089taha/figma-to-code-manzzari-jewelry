import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header />

 <div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/3 2xl:w-2/3 p-10 md:p-16 lg:p-20 xl:p-24 2xl:p-32">
    <h1 className="text-black font-badoni font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight tracking-tight mb-8">
      IMPECCABLE<br />
      CRAFTSMANSHIP AND<br />
      FINESSE
    </h1>
    <p className="font-badoni font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#787054] leading-relaxed mb-10">
      An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
    </p>
    <button className="bg-[#A29875] text-white font-bold py-4 px-8 rounded-[10px] w-72">
      Explore Now
    </button>
  </div>
  <div className="w-full md:w-1/2 lg:1/2 flex justify-center md:justify-end p-10 md:p-16 lg:p-20 xl:p-24 2xl:p-32">
  <img src="/image.svg" alt="image" className="w-full md:w-3/4 lg:w-full" />

  </div>
</div>  




    </>
  );
}
