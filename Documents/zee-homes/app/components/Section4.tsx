import Link from "next/link";

const Section4 = () => {
  return (
    <>
      <section className="sec4 w-full h-fit py-[5%] flex justify-center items-center">
        <div className="w-[90%] h-full flex flex-col justify-center items-center gap-y-4">
          <h2 className="text-2xl font-bold text-white text-center">Ready to Sell Your Property?</h2>
          <p className="text-[16px] max-w-[550px] text-white text-center">
            Lorem ipsum dolor sit amet. Voluptatibus expedita nobis corrupti,
            blanditiis assumenda iusto dolores quae quaerat? Possimus, hic.
          </p>
          <Link href="" className="bg-red-600 transition duration-300 ease-in-out hover:bg-red-500 py-2 px-7 text-white">
            List a Building
          </Link>
        </div>
      </section>
    </>
  );
};

export default Section4;
