
const Section2 = () => {
  return (
    <>
      <section className="w-full h-fit py-[5%] flex justify-center items-center">
        <div className="w-[90%] h-full flex justify-center flex-col items-center gap-y-7">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-black/90 font-semibold text-xl md:text-2xl text-center">
              Easy, Transparent, and tress Free Real Estate
            </h2>
            <p className="text-black/90 text-[13px] md:text-[16px] text-center max-w-[600px]">
              Lorem ipsum dolor sit amet. Iste natus labore, consequatur
              blanditiis molestias architecto ipsum dolores.
            </p>
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[45%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="shadow-xl w-full h-[9em] bg-white flex flex-col gap-y-1 justify-center items-start p-3 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <h2 className="text-black/90 text-xl">10k+</h2>
                <h3 className="text-black/90 text-[14px]">Happy Users</h3>
              </div>
              <div className="shadow-xl w-full h-[9em] bg-red-600 flex flex-col gap-y-1 justify-center items-start p-3 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <h2 className="text-white text-xl">10k+</h2>
                <h3 className="text-white text-[14px]">Happy Users</h3>
              </div>
              <div className="shadow-xl w-full h-[9em] bg-white flex flex-col gap-y-1 justify-center items-start p-3 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <h2 className="text-black/90 text-xl">10k+</h2>
                <h3 className="text-black/90 text-[14px]">Happy Users</h3>
              </div>
              <div className="shadow-xl w-full h-[9em] bg-white flex flex-col gap-y-1 justify-center items-start p-3 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <h2 className="text-black/90 text-xl">10k+</h2>
                <h3 className="text-black/90 text-[14px]">Happy Users</h3>
              </div>
            </div>
            <div className="flex shadow-xl p-8 rounded-2xl flex-col gap-y-4 h-fit w-full md:w-[49%]">
              <span className="flex flex-col gap-y-2">
                <h2 className="text-[16px] font-semibold">
                  {" "}
                  <span className="text-[12px]">&#10004;</span> Virtual Home
                  Tour
                </h2>
                <p className="text-[14px] text-black/70">
                  Lorem ipsum dolor sit amet elit. Dolores praesentium ex, quae
                  quidem dolore nemo tempora.
                </p>
              </span>

              <span className="flex flex-col gap-y-2">
                <h2 className="text-[16px] font-semibold">
                  {" "}
                  <span className="text-[12px]">&#10004;</span> Verified Users &
                  Listings
                </h2>
                <p className="text-[14px] text-black/70">
                  Lorem ipsum dolor sit amet elit. Dolores praesentium ex, quae
                  quidem dolore nemo tempora.
                </p>
              </span>

              <span className="flex flex-col gap-y-2">
                <h2 className="text-[16px] font-semibold">
                  {" "}
                  <span className="text-[12px]">&#10004;</span> Neighbouring
                  Insights
                </h2>
                <p className="text-[14px] text-black/70">
                  Lorem ipsum dolor sit amet elit. Dolores praesentium ex, quae
                  quidem dolore nemo tempora.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
